(function($) {

    $.fn.jquizzy = function(settings) {
    var aboutmy=document.getElementById('about').value;

        var defaults = {
            questions: null,
            startImg: 'images/2.gif',
            endText: '已结束!',
            shortURL: null,
            sendResultsURL: null,
            resultComments: {
                perfect: '不愧是才高八斗!（霉霉比心给你！）',
                excellent: '学富五车呀!（霉霉比心给你！）',
                good: '进，可考研；退，可搬砖。（看霉霉手势）',
                average: '你不是雨伞别撑着,哭。',
                bad: '你若安好，便是晴天。轰隆！',
                poor: '你之所以选C，是因为它一笔可以写完。（霉霉怒恐！）',
                worst: '你的优点：每天能交新朋友，做题从不重复。（嘚瑟）'
            }
        };
        var config = $.extend(defaults, settings);
        
        if (config.questions === null) {
            $(this).html('<div class="intro-container slide-container"><h2 class="qTitle">Failed to parse questions.</h2></div>');
            return;
        }
       
       if (aboutmy==="官网") {
           $(this).html('<iframe src="http://7xi.bid/blog/about/index.html"  width="100%" height="100%" frameborder="0"  name="_blank" id="_blank" ></iframe>');
            return;
       }

         
         var num = document.getElementById('ct');
        if(isNaN(num.value)&&num.value!=0){
			ct=Math.floor(Math.random()*7)+1;
			    win.alert('系统提示', '你输入的不是数字，我帮你改为'+ct+'题了。请知悉！');
			//	alert('你输入的不是数字，我帮你改为'+ct+'题了。请知悉！');
                document.getElementById("ct").value = ct
				}else{
					if(document.getElementById('ct').value==0){	ct=Math.floor(Math.random()*15)+1;
					win.alert('系统提示', '随机取'+ct+'题。做题时【切勿点击】重载！！！');
			//	alert('随机取'+ct+'题。做题时【切勿点击】重载！！！')
				}else{
                ct=Number(document.getElementById('ct').value)
                 }
                 }

		document.getElementById("sct").value = ct;
        var superContainer = $(this),
        answers = [],      
        introFob = '	<div class="intro-container slide-container"><a class="nav-start" href="#">抽选' + ct + '题，题库' + config.questions.length + '道。☟开始。<br/><br/><span><img src="images/'+ Math.floor(Math.random()*6) +'.gif"  width=50%></span></a></div>	',
        exitFob = '<div class="results-container slide-container"><div class="question-number">' + config.endText + '</div><div class="result-keeper"></div></div><div class="notice">骚年，必须选择一个！</div><div class="progress-keeper" ><div class="progress"></div></div>',
        contentFob = '',
        questionsIteratorIndex,
        answersIteratorIndex;
		 
   
	 
	
	 
	
        superContainer.addClass('main-quiz-holder');
		//	 alert(ct)
//抽题存入	randoms数组	共i题 randoms[i]即为questionsIteratorIndex序号！
        var kmmc = document.getElementById("kmxz").value


		if(kmmc!=='章节'){
           var arr=[];
			for (var i = 0; i < config.questions.length +1; i++) {
				if(i<config.questions.length){
				if(config.questions[i].km === kmmc){
					if(document.getElementById('jst').checked==true){
						if(config.questions[i].type =="4"){
							arr.push(i);}}else{arr.push(i);}}}else{if(arr.length===0){arr.push(i-1)}}
				};
			




				var randoms=[]; 
                while (true) 
               { 
                 var isExists = false; 
                   // 获取挑选出来范围的数 
                 var random = arr[Math.floor(Math.random() * arr.length)]
                   // 判断当前随机数是否已经存在 
                 for (var i = 0; i < randoms.length; i++) { 
                   if (random === randoms[i]) { 
                     isExists = true; 
					 break; 
					 } 
                } 
               // 如果不存在，则添加进去 
               if (!isExists) 
                randoms.push(random); 
                // 如果有ct位随机数了，就跳出 
               if (randoms.length === ct||randoms.length === arr.length) 
               break; 
               }

var len=randoms.length;
 if(len < ct){
 	win.alert('系统提示', '你选择的章节或者计算题题库不足。本次随机在题库中抽取'+ct+'题，请知悉！');
	  for (var i = len; i < ct; i++) {
		  var random = Math.floor(Math.random() * config.questions.length);
          randoms.push(random);
	  }}


		}else{

            if(document.getElementById('jst').checked==true){
           var arr=[];
			for (var i = 0; i < config.questions.length +1; i++) {
				if(i<config.questions.length){
				if(config.questions[i].type =="4"){
				arr.push(i);}}else{if(arr.length===0){arr.push(i-1)}}
				};
		   }



				var randoms=[]; 
                while (true) 
               { 
                 var isExists = false; 
                   // 获取挑选出来范围的数 
                 if(document.getElementById('jst').checked==true){var random = arr[Math.floor(Math.random() * arr.length)];}else
					 {var random = Math.floor(Math.random() * config.questions.length);}
                   // 判断当前随机数是否已经存在 
                 for (var i = 0; i < randoms.length; i++) { 
                   if (random === randoms[i]) { 
                     isExists = true; 
					 break; 
					 } 
                } 
               // 如果不存在，则添加进去 
               if (!isExists) 
                randoms.push(random); 
                // 如果有ct位随机数了，就跳出 
               if (randoms.length === ct) 
               break; 
               }	



		  }




		
//抽题存入	randoms数组	共i题 randoms[i]即为questionsIteratorIndex序号！	
		
        for (i = 0; i < ct; i++) {
			questionsIteratorIndex = randoms[i]
			 if (config.questions[questionsIteratorIndex].ans.length==1){if (config.questions[questionsIteratorIndex].answers.length==2){ tx='判断题：'}else{if (config.questions[questionsIteratorIndex].type=="4"){tx='计算题：'}else{tx='单选题：'}}}else{tx='多选题：'}
            contentFob += '<div class="slide-container"><div class="question">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NO.['+ (i + 1) + '/'+ct+'] '+tx+'<hr>' + config.questions[questionsIteratorIndex].title + '<br></div><ul class="answers"><div class="correct1"><P>考核章节：'+ config.questions[questionsIteratorIndex].km+'<P></div>';

			for (answersIteratorIndex = 0; answersIteratorIndex < config.questions[questionsIteratorIndex].answers.length; answersIteratorIndex++) {
				if(tx=='多选题：'){	         
                contentFob += '<li name="duoxuan">' + config.questions[questionsIteratorIndex].answers[answersIteratorIndex] + '</li>';}else{	         
                contentFob += '<li>' + config.questions[questionsIteratorIndex].answers[answersIteratorIndex] + '</li>';}
            }
            contentFob += '</ul><div class="nav-container">';
                if(config.questions[questionsIteratorIndex].type=="4"){
                	contentFob += '<div  class="correct1"><p>查看计算题解答</p><div class="resultsview-correct1">'+config.questions[questionsIteratorIndex].jiexi+'</div></div><br>';
                }else
                {if(document.getElementById('answ').checked==true){
						if(tx=='判断题：'){if(config.questions[questionsIteratorIndex].ans=='A'){daan='√'}else{daan='×'}}else{ daan=config.questions[questionsIteratorIndex].ans  }
						contentFob += '<div  class="correct1"><p>参考答案：' + daan +'</p><div class="resultsview-correct1">'+config.questions[questionsIteratorIndex].jiexi+'</div></div><br>';}}
						
            if (i !== -1) {
                contentFob += '<div class="prev"><a class="nav-previous" href="#">&lt; 上一题</a></div>';
            }
            if (i < ct - 1) {
                contentFob += '<div class="next"><a class="nav-next" href="#">下一题 &gt;</a></div>';
            } else {
                contentFob += '<div class="next final"><a class="nav-show-result" href="#">完成</a></div>';
            }
            contentFob += '</div></div>';
            answers.push(config.questions[questionsIteratorIndex].ans);
        }
        superContainer.html(introFob + contentFob + exitFob);
        var progress = superContainer.find('.progress'),
        progressKeeper = superContainer.find('.progress-keeper'),
        notice = superContainer.find('.notice'),
        progressWidth = progressKeeper.width(),
        userAnswers = [],
        questionLength = ct,
        slidesList = superContainer.find('.slide-container');
        function checkAnswers() {
            var resultArr = [],
            flag = false;
            for (i = 0; i < answers.length; i++) {
                if (answers[i] == userAnswers[i]) {
                    flag = true;
                } else {
                    flag = false;
                }
                resultArr.push(flag);

            }
            return resultArr;
        }
        function roundReloaded(num, dec) {
            var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
            return result;
        }
        function judgeSkills(score) {
            var returnString;
            if (score === 100) return config.resultComments.perfect;
            else if (score > 89) return config.resultComments.excellent;
            else if (score > 79) return config.resultComments.good;
            else if (score > 59) return config.resultComments.average;
            else if (score > 39) return config.resultComments.bad;
            else if (score > 19) return config.resultComments.poor;
            else return config.resultComments.worst;
        }
        progressKeeper.hide();
        notice.hide();
        slidesList.hide().first().fadeIn(100);
        superContainer.find('li').click(function() {
               var thisLi = $(this);
              if (thisLi.hasClass('selected')) {
                  thisLi.removeClass('selected');
				  
               } else {
				   if($(this).attr("name")!=='duoxuan') {
                thisLi.parents('.answers').children('li').removeClass('selected');  }  // 
                 thisLi.addClass('selected');
            }
            });
        superContainer.find('.nav-start').click(function() {
        superContainer.find('.resultsview-correct1').hide();
        superContainer.find('.correct1').hover(function() {      
                $(this).find('.resultsview-correct1').show();
            },
            function() {
                $(this).find('.resultsview-correct1').hide();
            });
		//	time_start();
		    setTimeout('$("#lm").fadeOut(100);', 1);
            $(this).parents('.slide-container').fadeOut(50,
            function() {
                $(this).next().fadeIn(100);
                progressKeeper.fadeIn(100);
            });
            return false;
			
        });
        superContainer.find('.next').click(function() {
            if ($(this).parents('.slide-container').find('li.selected').length === 0) {
                notice.fadeIn(300);
                return false;
            }
            notice.hide();
            $(this).parents('.slide-container').fadeOut(100,
            function() {
                $(this).next().fadeIn(100);
            });
            progress.animate({
                width: progress.width() + Math.round(progressWidth / questionLength)
            },
            500);
            return false;
        });
        superContainer.find('.prev').click(function() {
            notice.hide();
            $(this).parents('.slide-container').fadeOut(100,
            function() {
                $(this).prev().fadeIn(100);
            });
            progress.animate({
                width: progress.width() - Math.round(progressWidth / questionLength)
            },
            500);
            return false;
        });
        superContainer.find('.final').click(function() {
            if ($(this).parents('.slide-container').find('li.selected').length === 0) {
                notice.fadeIn(300);
                return false;
            }
          for (i = 0 ; i < ct; i++) {
		        itme=[]
             superContainer.find('ul:eq('+ i +') li.selected').each(function(index) {  
			                               it=$(this).index()
										   if(it==1){it='A';}
										   if(it==2){it='B';}
										   if(it==3){it='C';}
										   if(it==4){it='D';}
										   if(it==5){it='E';}
										   if(it==6){it='F';}

					                       itme=itme + it			  					  
					 });
					  userAnswers.push(itme)
                    //    alert(userAnswers[i].length)
	                           }
            if (config.sendResultsURL !== null) {
                var collate = [];
                for (r = 0; r < questionLength; r++) {
                    collate.push('{"questionNumber":"' + parseInt(r + 1, 10) + '","userAnswer":"' + userAnswers[r] + '"}');
                }
                $.ajax({
                    type: 'POST',
                    url: config.sendResultsURL,
                    data: '{"answers": [' + collate.join(",") + ']}',
                    complete: function() {
                        console.log("OH HAI");
                    }
                });
            }
            progressKeeper.hide();
            var results = checkAnswers(),
            resultSet = '',
            trueCount = 0,
            shareButton = '',
            score,
            url;
            if (config.shortURL === null) {
                config.shortURL = window.location
            };
            for (var i = 0 ,
            toLoopTill = results.length; i < toLoopTill; i++) {
                if (results[i] === true) {
                    trueCount++;
                    isCorrect = true;
                }
                resultSet += '<div class="result-row">' + (results[i] === true ? "<div class='correct'>NO."+(i + 1)+"<span></span></div>": "<div class='wrong'>NO."+(i + 1)+"<span></span></div>");
                resultSet += '<div class="resultsview-qhover">' + config.questions[randoms[i]].title ;
                resultSet += "<ul>";
                for (answersIteratorIndex = 0; answersIteratorIndex < config.questions[randoms[i]].answers.length; answersIteratorIndex++) {
                    var classestoAdd = '';
				if(answersIteratorIndex ==0){an="A";}
				if(answersIteratorIndex ==1){an="B";}
				if(answersIteratorIndex ==2){an="C";}
				if(answersIteratorIndex ==3){an="D";}
				if(answersIteratorIndex ==4){an="E";}
				if(answersIteratorIndex ==5){an="F";}
				var str=config.questions[randoms[i]].ans;
                var ustr=userAnswers[i];
                    if (str.indexOf(an) >= 0) {
                        classestoAdd += 'right';
                    }
                    if (ustr.indexOf(an) >= 0) {
                        classestoAdd += ' selected';
                    }
                    resultSet += '<li class="' + classestoAdd + '">' + config.questions[randoms[i]].answers[answersIteratorIndex] +  '</li>';
                }
                resultSet += '<hr>答案【'+ config.questions[randoms[i]].ans +'】解析：'+ config.questions[randoms[i]].jiexi +'</ul></div></div>';
            }
            score = roundReloaded(trueCount / questionLength * 100, 2);


            if (score === 100) {tttt=100;ttt = trueCount * 1925;}
            else if (score > 90) {tttt=90;ttt = trueCount * 2250;}
            else if (score > 80) {tttt=80;ttt = trueCount * 2250;}
            else if (score > 60) {tttt=70;ttt = trueCount * 2200;}
            else if (score > 40) {tttt=40;ttt = trueCount * 1525;}
            else if (score > 20) {tttt=20;ttt = 3000;}
            else {tttt=110 + Math.floor(Math.random()*2);ttt = 3000;}
          //  if(score>79){tttt=15;ttt = trueCount * 2500}else{if(score>59){tttt=16;ttt = trueCount * 2200}else{if(score>39){tttt=18;ttt = 8000}else{tttt=17;ttt = 8000}}}
            resultSet = '<br><br><div id="mmlove" style="display:none;"><img src="images/'+ tttt +'.gif"  width=50%></div><br/><hr/><div class="jquizzy-clear">' + resultSet + '</div><div class="jquizzy-clear"></div>';
            superContainer.find('.result-keeper').html(resultSet).show(100);
            $('.waifu-tips').html('<br>你考试分数:'+score+'分！<br><br>'+judgeSkills(score)+ shareButton+'<br><br>还想再试一下请点右侧的小房子图标！' ).fadeTo(200, 1);
            setTimeout('$("#mmlove").fadeIn(1000);', 1);
            superContainer.find('.qTitle').hide();
            superContainer.find('.jquizzy-clear').hide();
            superContainer.find('.qTitle').show(100);
            setTimeout('$("#mmlove").fadeOut(ttt);', 1);
            //superContainer.find('.correct').show(2500);
            superContainer.find('.jquizzy-clear').show(3000);
            superContainer.find('.resultsview-qhover').hide();
            superContainer.find('.result-row').hover(function() {
                $(this).find('.resultsview-qhover').show();
            },
            function() {
                $(this).find('.resultsview-qhover').hide();
            });
            $(this).parents('.slide-container').fadeOut(100,
            function() {
                $(this).next().fadeIn(100);
            });
            return false;
        });
    };
})(jQuery);