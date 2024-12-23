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
            background-color: #f8f8f8;
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
    </style>
</head>
<body>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">Lescoffee</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#coffee-types-flavors">種類與風味</a></li>
                <li class="nav-item"><a class="nav-link" href="#market-info">市場資訊</a></li>
                <li class="nav-item"><a class="nav-link" href="#discussion-forum">討論區</a></li>
                <li class="nav-item"><a class="nav-link" href="#custom-blend">自行調配</a></li>
            </ul>
        </div>
    </nav>

    <!-- Header Section -->
    <header class="jumbotron jumbotron-fluid text-center" style="background-image: url('path/to/coffee-bg.jpg'); background-size: cover; color: #fff;">
        <div class="container">
            <h1 class="display-4">歡迎來到Lescoffee</h1>
            <p class="lead">探索各類咖啡豆、風味及自定義混合您的完美咖啡。</p>
        </div>
    </header>

    <!-- Coffee Types and Flavors Section -->
    <section id="coffee-types-flavors" class="coffee-section">
        <div class="container">
            <h2 class="section-title text-center">尋找咖啡豆種類及風味</h2>
            <div class="row">
                <div class="col-md-6">
                    <h3>種類</h3>
                    <ul class="list-group">
                        <li class="list-group-item">阿拉比卡（Arabica）</li>
                        <li class="list-group-item">羅布斯塔（Robusta）</li>
                        <li class="list-group-item">賴比瑞亞（Liberica）</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h3>風味</h3>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>巴西：</strong>世界上最大的咖啡豆產地，以中性口感和巧克力餘味著稱。</li>
                        <li class="list-group-item"><strong>哥倫比亞：</strong>產量僅次於巴西的第二大咖啡工業國，咖啡豆味道濃郁。</li>
                        <li class="list-group-item"><strong>肯亞：</strong>種植高品質的阿拉比卡咖啡豆，帶有明顯的果酸和莓果香氣。</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Market Information Section -->
    <section id="market-info" class="coffee-section bg-light">
        <div class="container">
            <h2 class="section-title text-center">世界咖啡消耗與出產數量</h2>
            <p class="text-center">資料來源：<a href="https://www.ico.org/" target="_blank">國際咖啡組織（International Coffee Organization）</a></p>
            <!-- 可以使用圖表展示數據，這裡預留位置 -->
            <div class="text-center">
                <img src="path/to/market-data-chart.png" alt="咖啡市場數據" class="img-fluid">
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
                    s.src = 'https://YOUR_DISQUS_SHORTNAME.disqus.com/embed.js';
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
            <form class="custom-form" action="#" method="post">
                <div class="form-group">
                    <label for="bean-type">咖啡豆類別：</label>
                    <select id="bean-type" name="bean_type" class="form-control">
                        <option value="brazil">巴西</option>
                        <option value="colombia">哥倫比亞</option>
                        <option value="africa">非洲</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="strength">咖啡濃淡度：</label>
                    <select id="strength" name="strength" class="form-control">
                        <option value="strong">濃</option>
                        <option value="mild">淡</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="brew-method">製作方式：</label>
                    <select id="brew-method" name="brew_method" class="form-control">
                        <option value="espresso">意式濃縮咖啡</option>
                        <option value="pour-over">手沖壺</option>
                        <option value="french-press">法壓壺</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="milk-type">牛奶種類：</label>
                    <select id="milk-type" name="milk_type" class="form-control">
                        <option value="oat">燕麥</option>
                        <option value="utf">UTF</option>
                        <option value="milk-3-7">3.7牛奶</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary btn-block">調配咖啡</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2023 咖啡愛好者。保留所有權利。</p>
    </footer>

    <!-- Bootstrap JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html> 
