function displaycontent() {

            document.getElementsByClassName("nav2")[0].style.display = "block";
            document.getElementsByClassName("content-second")[0].style.display="block";
            document.getElementsByClassName("news-second")[0].style.display="none";

        }

        function displaynews() {

            document.getElementsByClassName("nav2")[0].style.display = "block";
            document.getElementsByClassName("content-second")[0].style.display="none";
            document.getElementsByClassName("news-second")[0].style.display="block";

        }
        function hide() {

            document.getElementsByClassName("nav2")[0].style.display = "none";
        }