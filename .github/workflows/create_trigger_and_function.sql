-- Function to log inserted data
CREATE OR REPLACE FUNCTION log_inserted_data()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO logs (data, created_at) VALUES (NEW.*, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to call the function after an insert
CREATE TRIGGER after_insert_trigger
AFTER INSERT ON Discuss
FOR EACH ROW
EXECUTE FUNCTION log_inserted_data();

CREATE TABLE comment_logs (
    id SERIAL PRIMARY KEY,
    comment TEXT,
    ip_add TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
    log_id UUID,
);

-- Function to log comments
CREATE OR REPLACE FUNCTION log_comment()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO comment_logs (comment, ip_add, created_at, log_id) 
    VALUES (NEW.comment, NEW.ip_add, NEW.created_at, NEW.log_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to call the function after a new comment is added
CREATE TRIGGER after_comment_insert
AFTER INSERT ON Discuss
FOR EACH ROW
EXECUTE FUNCTION log_comment();
