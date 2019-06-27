document.addEventListener('DOMContentLoaded',
    function(){
        color = chrome.storage.sync.get("color",
            function (color){
                document.getElementsByTagName("body")[0].style.backgroundColor = color['color'];
            }
        );
    }
);
