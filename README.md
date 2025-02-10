---
layout: default
title: Lescoffee - 咖啡愛好者的天堂
description: 探索各類咖啡豆、風味及自定義混合您的完美咖啡
---

<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>咖啡愛好者頁面</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
    <style>
        /* 自定義樣式 */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #e9e8e8;
            background-image: url('https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/water%20mark.jpg'); /* 替換為您的水印圖片 URL */
            background-size: contain; /* 使用 contain 以適應半頁 */
            background-repeat: no-repeat;
            background-position: center;
            height: 1600px; /* 設置高度為視口高度的50% */
            opacity: 0.9; /* 調整透明度以使水印不會過於突出 */
        }
        .section-title {
            color: #6f4e37;
            margin-bottom: 30px;
        }
        .coffee-section {
            padding: 60px 0;
            background-color: #fff;
        }
        .custom-form {
            max-width: 600px;
            margin: 0 auto;
        }
        footer {
            background-color: #6f4e37;
            color: #fff;
            padding: 20px 0;
            text-align: center;
        }
        .btn-coffee {
            background-color: #6f4e37;
            color: #fff;
            border: none;
        }
        .btn-coffee:hover {
            background-color: #5a3f2d;
            color: #fff;
        }
    </style>
</head>
<body>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Lescoffee</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="#coffee-types-flavors">種類與風味</a></li>
                    <li class="nav-item"><a class="nav-link" href="#market-info">市場資訊</a></li>
                    <li class="nav-item"><a class="nav-link" href="#discussion-forum">討論區</a></li>
                    <li class="nav-item"><a class="nav-link" href="#custom-blend">自行調配</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Header Section -->
    <header class="jumbotron jumbotron-fluid text-center" style="
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80');
        background-size: cover;
        background-position: center;
        color: #fff;
        padding: 120px 0;
        margin-bottom: 0;">
        <div class="container">
            <h1 class="display-4">歡迎來到Lescoffee</h1>
            <p class="lead" style="color: #fff !important;">探索各類咖啡豆、風味及自定義混合您的完美咖啡。</p>
        </div>
    </header>

    <!-- Coffee Types and Flavors Section -->
    <section id="coffee-types-flavors" class="coffee-section">
        <div class="container">
            <h2 class="section-title text-center">尋找咖啡豆種類及風味</h2>
            <div class="row">
                <div class="col-md-8">
                    <h3>種類</h3>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <img src="https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/arabica.jpg" alt="阿拉比卡咖啡豆" 
                                         class="img-fluid rounded shadow-sm" 
                                         style="max-width: 130px; height: auto;">
                                </div>
                                <div class="col-md-8">
                                    <h5 class="mb-2">阿拉比卡（Arabica）</h5>
                                    <p class="mb-0 text-muted">
                                        最受歡迎的咖啡品種，佔全球產量的60%以上。
                                        具有細緻的香氣，口感清爽，帶有水果或花香調，
                                        酸度適中，苦味柔和。
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <img src="https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Liberica.jpg" alt="羅布斯塔咖啡豆" 
                                         class="img-fluid rounded shadow-sm" 
                                         style="max-width: 120px; height: auto;">
                                </div>
                                <div class="col-md-8">
                                    <h5 class="mb-2">羅布斯塔（Robusta）</h5>
                                    <p class="mb-0 text-muted">
                                        咖啡因含量是阿拉比卡的兩倍，
                                        具有強烈的苦味和濃郁的香氣，
                                        常用於製作義式濃縮咖啡和即溶咖啡。
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <img src="https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Robusta-Coffee.jpg" alt="賴比瑞亞咖啡豆" 
                                         class="img-fluid rounded shadow-sm" 
                                         style="max-width: 120px; height: auto;">
                                </div>
                                <div class="col-md-8">
                                    <h5 class="mb-2">賴比瑞亞（Liberica）</h5>
                                    <p class="mb-0 text-muted">
                                        較為罕見的品種，豆粒較大，
                                        具有獨特的木質香氣和花果香調，
                                        口感醇厚，帶有淡淡的煙燻味。
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h3>即時咖啡部落格 <a href="http://www.coffeechina.org/" target="_blank" class="fs-6 ms-2"><i class="bi bi-box-arrow-up-right"></i> 咖啡資訊</a></h3>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <small class="text-muted">
                                    <script>
                                        document.write(new Date().toLocaleDateString('zh-TW', { hour: '2-digit', minute: '2-digit' }).replace(/\//g, '-'));
                                    </script>
                                </small>
                                <span class="badge bg-primary">咖啡知識</span>
                            </div>
                            <h5><a href="https://sca.coffee/" target="_blank">【現場更新】咖啡豆選購指南 <i class="bi bi-cup-hot ms-2"></i></a></h5>
                            <p class="mb-0 text-muted">直播討論（下次更新 <span id="next-update-time"></span>）：<a href="http://www.taiwancoffee.org.tw/arabica" target="_blank">不同產區阿拉比卡豆</a>的風味差異比較...</p>
                            <script>
                                function updateLiveTime() {
                                    const now = new Date();
                                    now.setHours(now.getHours() + 4);
                                    document.getElementById('next-update-time').textContent = 
                                        `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
                                    
                                    // 隨機更新在線人數
                                    document.getElementById('online-users').textContent = 
                                        Math.floor(Math.random() * (500 - 300 + 1)) + 300;
                                }
                                updateLiveTime();
                                setInterval(updateLiveTime, 4 * 60 * 60 * 1000);
                                setInterval(() => document.getElementById('online-users').textContent = 
                                    Math.floor(Math.random() * (500 - 300 + 1)) + 300, 5000);
                            </script>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <small class="text-muted">
                                    <script>
                                        document.write(new Date().toLocaleDateString('zh-TW', { hour: '2-digit', minute: '2-digit' }).replace(/\//g, '-'));
                                    </script>
                                </small>
                                <span class="badge bg-success">沖煮技巧</span>
                            </div>
                            <h5><a href="https://www.umagazine.com.hk/category/coffee" target="_blank">【香港實測】本地咖啡師手沖秘技 <i class="bi bi-person ms-2"></i></a></h5>
                            <p class="mb-0 text-muted">熱門討論：<a href="https://www.openrice.com/zh/hongkong/coffee-guide" target="_blank">OpenRice咖啡達人指南</a>・<a href="https://www.discuss.com.hk/forumdisplay.php?fid=123" target="_blank">香港討論區即時更新 <i class="bi bi-chat ms-1"></i></a></p>
                            <script>
                                const comments = [
                                    "東京網友分享冰滴咖啡製作心得",
                                    "倫敦咖啡師示範法壓壺技巧",
                                    "舊金山最新冷萃咖啡配方分享"
                                ];
                                setInterval(() => {
                                    document.querySelectorAll('small script')[1].innerHTML = 
                                        `new Date().toLocaleDateString('zh-TW', { hour: '2-digit', minute: '2-digit' }).replace(/\//g, '-')`;
                                    document.querySelector('#latest-comment').textContent = 
                                        comments[Math.floor(Math.random() * comments.length)];
                                }, 10000);
                            </script>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <small class="text-muted">
                                    <script>
                                        document.write(new Date().toLocaleDateString('zh-TW', { hour: '2-digit', minute: '2-digit' }).replace(/\//g, '-'));
                                    </script>
                                </small>
                                <span class="badge bg-warning text-dark">文化歷史</span>
                            </div>
                            <h5><a href="https://perfectdailygrind.com/" target="_blank">【探索全球咖啡新浪潮】<i class="bi bi-people ms-2"></i></a></h5>
                            <p class="mb-0 text-muted">熱門站點：<a href="https://www.home-barista.com/" target="_blank">Home Barista 咖啡社群</a>・<a href="https://www.coffeechronicler.com/" target="_blank">咖啡達人博客 <i class="bi bi-cup ms-1"></i></a></p>
                            <script>
                                setInterval(() => {
                                    document.querySelectorAll('small script')[2].innerHTML = 
                                        `new Date().toLocaleDateString('zh-TW', { hour: '2-digit', minute: '2-digit' }).replace(/\//g, '-')`;
                                }, 4 * 60 * 60 * 1000);
                            </script>
                        </li>
                        <li class="list-group-item bg-light">
                            <div class="d-flex align-items-center">
                                <span class="text-success me-2">●</span>
                                <small class="text-muted">即時更新中 - <span id="online-users">356</span> 人正在討論</small>
                            </div>
                            <div class="mt-2">
                                <small class="text-muted">最新留言：<span id="latest-comment">台北網友分享冰滴咖啡製作心得</span>...</small>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Market Information Section -->
    <section id="market-info" class="coffee-section bg-light">
        <div class="container">
            <h2 class="section-title text-center">世界咖啡消耗與出產數量</h2>
            <p class="text-center">價格數據來源：
            
            <div class="row justify-content-center mb-5">
                <div class="col-md-8">
                    <div class="price-container bg-white p-4 rounded shadow-sm border">
                        <h5 class="text-center mb-3">國際咖啡組織即時價格數據</h5>
                        <!-- ICO Official Price Embed -->
                        <iframe src="https://www.ico.org/prices/p1.aspx" 
                            style="height:200px;width:100%;border:none;" 
                            id="ico-price-embed"
                            class="d-flex align-items-center justify-content-center text-muted"
                            loading="lazy">
                        </iframe>
                        <div class="text-center mt-2">
                            <small class="text-muted">數據每日更新 | 來源：<a href="https://ico.org" target="_blank">國際咖啡組織</a></small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <img src="https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/market-data-chart.png" 
                     alt="咖啡市場數據" 
                     class="img-fluid rounded shadow"
                     style="max-width: 800px;">
                <p class="mt-3">資料來源：<a href="https://www.ico.org/" target="_blank">國際咖啡組織（International Coffee Organization）</a></p>
            </div>
        </div>
    </section>

    <!-- Discussion Forum Section -->
    <section id="discussion-forum" class="coffee-section">
        <div class="container">
            <h2 class="section-title text-center">討論區</h2>
            <!-- 嵌入第三方討論區插件，例如Disqus -->
            <div id="disqus_thread" class="mt-4"></div>
            <script>
                /**
                * 這段代碼來自 Disqus
                */
                var disqus_config = function () {
                    this.page.url = window.location.href;
                    this.page.identifier = "coffee-enthusiasts-page";
                };
                (function() { // DON'T EDIT BELOW THIS LINE
                    var d = document, s = d.createElement('script');
                    s.src = 'https://lescoffee.disqus.com/embed.js';
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                })();
            </script>
            <noscript>請啟用 JavaScript 以查看 <a href="https://disqus.com/?ref_noscript">評論</a>。</noscript>
        </div>
    </section>

    <!-- Custom Blend Section -->
    <section id="custom-blend" class="coffee-section bg-light">
        <div class="container">
            <h2 class="section-title text-center">自行調配咖啡</h2>
            <form class="custom-form" onsubmit="return showCoffeeResult(event)" action="javascript:void(0);">
                <div class="form-group">
                    <label for="bean-type">咖啡豆類別：</label>
                    <select id="bean-type" name="bean_type" class="form-control">
                        <option value="brazil">巴西</option>
                        <option value="colombia">哥倫比亞</option>
                        <option value="africa">肯亞</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="strength">咖啡濃淡度：</label>
                    <select id="strength" name="strength" class="form-control" required>
                        <option value="">請選擇濃淡度</option>
                        <option value="mild">淡</option>
                        <option value="strong">濃</option>
                        <option value="extra-strong">特濃</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="brew-method">製作方式：</label>
                    <select id="brew-method" name="brew_method" class="form-control" required>
                        <option value="">請選擇製作方式</option>
                        <option value="espresso">意式濃縮咖啡</option>
                        <option value="pour-over">手沖壺</option>
                        <option value="french-press">法壓壺</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="milk-type">牛奶種類：</label>
                    <select id="milk-type" name="milk_type" class="form-control" required>
                        <option value="">請選擇添加物</option>
                        <option value="oat">燕麥</option>
                        <option value="utf">UTF</option>
                        <option value="milk-3-7">3.7牛奶</option>
                        <option value="water">熱水</option>
                        <option value="none">不添加</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-coffee btn-block mb-4">調配咖啡</button>
                
                <!-- 結果顯示區域 -->
                <div id="resultArea" class="text-center" style="display: none;">
                    <h3 id="coffeeName" class="mb-3"></h3>
                    <img id="coffeeImage" src="" alt="咖啡圖片" class="img-fluid rounded" style="max-width: 300px;">
                </div>
            </form>
        </div>
    </section>

    <!-- 添加 JavaScript -->
    <script>
        function showCoffeeResult(event) {
            // 阻止表單默認提交行為
            event.preventDefault();
            
            const strength = document.getElementById('strength').value;
            const brewMethod = document.getElementById('brew-method').value;
            const milkType = document.getElementById('milk-type').value;
            
            let coffeeName = '';
            let imageUrl = '';

            // 判斷咖啡種類
            if (strength === 'mild' && brewMethod === 'espresso' && milkType === 'utf') {
                coffeeName = 'Caramel Latte - 焦糖拿鐵';
                imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Caramel%20Latte%20-%20焦糖拿鐵_.jpg';
            } else if (strength === 'strong' && brewMethod === 'espresso' && milkType === 'utf') {
                coffeeName = 'Cappuccino - 卡布奇諾';
                imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Cappuccino%20-%20卡布奇諾_.jpg';
            } else if (strength === 'strong' && brewMethod === 'espresso' && milkType === 'milk-3-7') {
                coffeeName  = 'Mochaccino - 摩卡奇諾';
               imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Mochaccino%20-%20摩卡奇諾_.jpg';
            } else if (strength === 'extra-strong' && brewMethod === 'espresso' && milkType === 'water') {
                coffeeName = 'Long Black – 濃黑咖啡';
                imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Long%20Black%20–%20濃黑咖啡_.jpg';
            } else if (strength === 'strong' && brewMethod === 'espresso' && milkType === 'water') {
                coffeeName = 'Americano - 美式咖啡';
                imageUrl = 'website/path/to/Americano - 美式咖啡 _.jpg';
            } else if (strength === 'strong' && brewMethod === 'espresso' && milkType === 'oat') {
                coffeeName = 'Oat Milk Cappuccino – 燕麥咖啡';
                imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Qat%20Milk%20Cappuccino%20–%20燕麥咖啡_.jpg';
            } else if (strength === 'extra-strong' && 
                     (brewMethod === 'espresso' || brewMethod === 'pour-over') && 
                     milkType === 'none') {
                coffeeName = 'Espresso - 濃縮咖啡';
                imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Expresso%20-%20濃縮咖啡_.jpg';
            } else {
                coffeeName = '個人風味咖啡';
                imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/your-brand-blend-style.jpg';
            }

            // 顯示結果
            document.getElementById('coffeeName').textContent = coffeeName;
            document.getElementById('coffeeImage').src = imageUrl;
            
            // 添加錯誤處理
            document.getElementById('coffeeImage').onerror = function() {
                this.src = 'https://via.placeholder.com/300x200?text=Coffee+Image+Not+Found';
            };

            // 顯示結果區域並平滑滾動
            document.getElementById('resultArea').style.display = 'block';
            document.getElementById('resultArea').scrollIntoView({ 
                behavior: 'smooth',
                block: 'nearest'
            });

            // 移除 URL 中的 hash
            if (window.history && window.history.replaceState) {
                window.history.replaceState('', document.title, window.location.pathname);
            }

            // 確保不會重定向
            return false;
        }
    </script>

    <!-- 添加 Make.com AI 聊天助手 -->
    <script>
        (function() {
            var script = document.createElement('script');
            script.src = 'https://openrouter.ai/v1/chat.js';
            script.async = true;
            script.defer = true;
            script.setAttribute('data-init', `{
                "api_key": "${process.env.openRouterApiKey}",
                "model": "google/gemini-2.0-flash-lite-preview-02-05:free",
                "temperature": 0.7
            }`);
            document.body.appendChild(script);
        })();

        // OpenRouter AI 聊天助手
        async function sendMessageToOpenRouter(message) {
            const chatContent = document.getElementById('chat-content');
            // Add loading message
            const loadingMessage = document.createElement('div');
            loadingMessage.className = 'chat-message';
            loadingMessage.textContent = 'Assistant: 回覆中....';
            chatContent.appendChild(loadingMessage);
            chatContent.scrollTop = chatContent.scrollHeight;

            try {
                const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${process.env.openRouterApiKey}`,
                        'Content-Type': 'application/json',
                        'Referer': window.location.href,
                        'X-Title': 'Lescoffee Chat'
                    },
                    body: JSON.stringify({
                        model: "google/gemini-2.0-flash-lite-preview-02-05:free",
                        messages: [{
                            role: "user", 
                            content: message
                        }],
                        temperature: 0.7
                    })
                });

                const data = await response.json();
                console.log('API Response:', data); // Log the entire response

                const reply = data.response?.text || "No response"; // Adjust extraction based on the logged structure

                loadingMessage.remove();
                chatContent.innerHTML += `<div class='chat-message'>Assistant: ${reply}</div>`;
                chatContent.scrollTop = chatContent.scrollHeight;

                // Save user message to the database
                await saveChatData(message, reply);

                return reply;
            } catch (error) {
                loadingMessage.remove();
                console.error('Error:', error);
                const retry = attemptsLeft => {
                    if(attemptsLeft > 0) {
                        console.log(`Retrying... attempts left: ${attemptsLeft}`);
                        setTimeout(() => {
                            sendMessageToOpenRouter(message)
                                .then(reply => {
                                    chatContent.innerHTML += `<div class='chat-message'>Assistant: ${reply}</div>`;
                                    chatContent.scrollTop = chatContent.scrollHeight;
                                })
                                .catch(err => retry(attemptsLeft - 1));
                        }, 5000); // Reduced from 35000 to 5000 for faster retry
                    } else {
                        chatContent.innerHTML += `<div class='chat-message error'>系統繁忙，請稍後再試</div>`;
                    }
                };
                retry(2);
            }
        }

        async function saveChatData(userMessage, botResponse) {
            const { data, error } = await supabase
                .from('Discuss') // Your table name
                .insert([
                    { 
                        created_at: new Date(), // Current timestamp
                        comment: userMessage, // User's message
                        ip_add: 'USER_IP_ADDRESS', // Replace with actual user IP if needed
                         // Generate or assign a UUID if needed
                    },
                    { 
                        created_at: new Date(), // Current timestamp
                        comment: botResponse, // Assistant's response
                        ip_add: 'USER_IP_ADDRESS', // Replace with actual user IP if needed
                         // Generate or assign a UUID if needed
                    }
                ]);

            if (error) {
                console.error('Error saving chat data:', error);
            } else {
                console.log('Chat data saved:', data);
            }
        }

        async function fetchChatHistory() {
            const { data, error } = await supabase
                .from('Discuss')
                .select('*')
                .order('created_at', { ascending: true });

            if (error) {
                console.error('Error fetching chat history:', error);
            } else {
                console.log('Chat history retrieved:', data);
                displayChatHistory(data);
            }
        }

        function displayChatHistory(chatHistory) {
            const chatContent = document.getElementById('chat-content');
            chatContent.innerHTML = ''; // Clear existing chat content

            chatHistory.forEach(chat => {
                chatContent.innerHTML += `<div class='chat-message'>Assistant: ${chat.comment}</div>`;
            });
        }
    </script>

    <!-- Chat Box Icon -->
    <div id="chat-icon" style="position: fixed; bottom: 20px; right: 20px; cursor: pointer; z-index: 1000;">
        <img src="https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/chat-icon.png" alt="Chat" style="width: 60px; height: 60px;">
    </div>

    <!-- Chat Modal -->
    <div id="chat-modal" style="display: none; position: fixed; bottom: 80px; right: 20px; width: 300px; height: 400px; border: 1px solid #ccc; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.2); z-index: 1001;">
        <div style="padding: 10px; background-color: #92aef0; color: white; text-align: center;">
            <h4>Chat with Us</h4>
            <button id="close-chat" style="background: none; border: none; color: white; cursor: pointer;">&times;</button>
        </div>
        <div id="chat-content" style="padding: 10px; height: 320px; overflow-y: auto;">
            <div class="chat-message">Assistant: 想知道什麼咖啡知識...</div>
        </div>
        <div style="display: flex; gap: 10px; align-items: center; margin: 10px;">
            <input type="text" id="chat-input" placeholder="Type your message..." style="flex: 1; padding: 10px;" onkeypress="if(event.keyCode==13){document.getElementById('submit-message').click(); return false;}">
            <button id="submit-message" onclick="(() => {
                const message = document.getElementById('chat-input').value;
                const chatContent = document.getElementById('chat-content');
                chatContent.innerHTML += `<div class='chat-message'>User: ${message}</div>`;
                sendMessageToOpenRouter(message);
                document.getElementById('chat-input').value = '';
                document.getElementById('chat-input').placeholder = 'Type your message...';
                chatContent.scrollTop = chatContent.scrollHeight;
            })()" 
                    style="padding: 10px; background-color: #92aef0; color: white; border: none; cursor: pointer;">
                Submit
            </button>
        </div>
    </div>

    <script>
        // Function to open chat interface
        document.getElementById('chat-icon').onclick = function() {
            document.getElementById('chat-modal').style.display = 'block';
        };

        // Function to close chat interface
        document.getElementById('close-chat').onclick = function() {
            document.getElementById('chat-modal').style.display = 'none';
        };

        // Function to send message
        document.getElementById('send-message').onclick = function() {
            const message = document.getElementById('chat-input').value;
            if (message) {
                const chatContent = document.getElementById('chat-content');
                chatContent.innerHTML += `<div>${message}</div>`;
                document.getElementById('chat-input').value = '';
                chatContent.scrollTop = chatContent.scrollHeight;
            }
        };

        // Event listeners for buttons
        document.getElementById('submit-message').onclick = function() {
            const message = document.getElementById('chat-input').value;
            if (message) {
                const chatContent = document.getElementById('chat-content');
                chatContent.innerHTML += `<div>${message}</div>`;
                document.getElementById('chat-input').value = '';
                chatContent.scrollTop = chatContent.scrollHeight;
            }
        };
    </script>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 咖啡愛好者。保留所有權利。</p>
    </footer>

    <!-- Bootstrap JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script>
        document.getElementById('create-db').addEventListener('click', () => {
            const request = indexedDB.open('ChatHistory', 1);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                const objectStore = db.createObjectStore('id', { keyPath: 'id' });
                objectStore.createIndex('created_at', 'created_at', { unique: false });
                objectStore.createIndex('add_ip', 'add_ip', { unique: false });
                objectStore.createIndex('comment', 'comment', { unique: false });
            };

            request.onsuccess = () => {
                console.log('Database created successfully');
            };

            request.onerror = (event) => {
                console.error('Database error:', event.target.error);
            };
        });
    </script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            fetchChatHistory(); // Fetch chat history when the page loads
        });
    </script>
</body>
</html> 


