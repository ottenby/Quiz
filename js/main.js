

$(document).ready(function() {
  
    $('#send').on('click', function() {
        
        
        let contentOne=$('.questionOne').val();
        let contentTwo=$('.questionTwo').val();
        let contentThree=$('.questionThree').val();
        let contentFour=$('.questionFour').val();
        let contentFive=$('.questionFive').val();
        let contentSix=$('.questionSix').val();

        let content = [contentOne, contentTwo, contentThree, contentFour, contentFive, contentSix ];

        
        const email = 'ottenby123@gmail.com';
        
        window.location.href = "mailto:"+email+"?subject="+"&body="+content;
        console.log(content);
     })

    })
    