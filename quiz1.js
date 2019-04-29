
		var homeBot = BotUI('home-demo');

    var questions= init.singleSelect
	var gameState = {
  'wins': 0,
  'losses': 0,
  'games': 0,
  'result': 0,
  'timu': 0,
  'wrong': 0,
  'right': 0
},
	resultMessages = ["咱们真是心有灵犀.", "好吧你赢了这一次!", "嘎嘎嘎，你输了..."],
	resultMessages1 = ["答对了，再接再厉！", "貌似...错了，不要气馁。"],
    playMessages = [icon('hand-rock-o') + ' 我出石头', icon('hand-paper-o') + ' 我出布', icon('hand-scissors-o') + ' 我出剪刀'],
    maxGames = 5

// work-around as markdown is not always correctly parsed
function icon(iconName) {
  return '<i class="botui-icon botui-message-content-icon fa fa-' + iconName + '"></i>'
}

		homeBot.message.add({
		  content: '你好！🎈'
		}).then(function () {
		  return homeBot.message.add({
		    delay: 1500,
		    content: '想知道我能做什么吗？'
		  });
		}).then(function () {
		  return homeBot.action.button({
		    delay: 1000,
		    action: [{
		      text: '想!😊',
		      value: 'sure'
		    }, {
		      text: '不用了😒',
		      value: 'skip'
		    }, {
		      text: '答题吧😏',
		      value: 'skip1'
		    }]
		  });
		}).then(function (res) {
		  if(res.value == 'sure') {
		    tutorial();
		  }
		  if(res.value == 'skip') {
		    end();
		  }
		  if(res.value == 'skip1') {
		    shifumi1();
		  }
		});

		var tutorial = function () {
			showMessage('我是看板娘Z16！', 3000, true);
		  homeBot.message.add({
		    delay: 1000,
		    content: "我会出财务题哦！💃"
		  }).then(function () {
		    return homeBot.message.add({
		      delay: 1000,
		      content: '🆔首先，请填写你的名字：'
		    });
		  }).then(function () {
		    return homeBot.message.add({
		      delay: 1200,
		      content: '😢你叫什么名字？（填写后按回车键）'
		    });
		  }).then(function () {
		    return homeBot.action.text({
		      delay: 800,
		      action: {
		        value: '王大棒槌',
		        placeholder: '填写你的名字'
		      }
		    });
		  }).then(function (res) {
			  showMessage(res.value +'这几个字普普通通，但是连起来读就不一样了！', 3000, true);
		    return homeBot.message.bot({
		      delay: 500,
		      content: res.value + ' 同学，😅名字如此霸气，敢不敢接受我的挑战？'
		    });
		  }).then(function () {
    return homeBot.action.button({
      delay: 1000,
      action: [{
        icon: 'check',
        text: '当然敢',
        value: 'yes'
      }, {
        icon: 'times',
        text: '下次吧',
        value: 'no'
      }]
    })
  }).then(function (res) {
    if (res.value === 'yes') {
      shifumi1()
    } else {
      homeBot.message.add({
        delay: 500,
        type: 'html',
        content: icon('frown-o') + gameMessages[Math.floor(Math.random()*gameMessages.length)]
      })
    }
  }).then(end);
		};



function shifumi1 () {
	var t = Math.floor(Math.random()*questions.length)
	if(questions[t].type==1){
	var tt = '单选🎵: </b>【'+questions[t].dl+'】-'+questions[t].km+'<br/>'  + questions[t].title +'<br/><br/>' + icon('hand-o-right') + ' ' +questions[t].answers[0]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[1]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[2]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[3]}else{	if(questions[t].type==2){
	var tt ='多选🎶: </b>【'+questions[t].dl+'】-'+questions[t].km+'<br/>' + questions[t].title +'<br/><br/>' + icon('hand-o-right') + ' ' +questions[t].answers[0]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[1]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[2]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[3]}else{	if(questions[t].type==3){
	var tt ='判断🎵: </b>【'+questions[t].dl+'】-'+questions[t].km+'<br/>'  + questions[t].title +'<br/><br/>' + icon('hand-o-right') + ' ' +questions[t].answers[0]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[1]}else{var tt = '计算🎵: </b>【'+questions[t].dl+'】-'+questions[t].km+'<br/>' + questions[t].title +'<br/><br/>' + icon('hand-o-right') + ' '+'主观计算题，不用回答' }}}
	    return homeBot.message.bot({
      delay: 500,
      type: 'html',
      content: '👓<b>第'+ (gameState.timu+1) +'题-'+tt,
    }).then(function () {
		  if(questions[t].type==3){
		  return homeBot.action.button({
		    delay: 1000,
		    action: [{
				icon: 'check-square-o',
		      text: '√',
		      value: 'A'
		    }, {
				icon: 'check-square-o',
		      text: '×',
		      value: 'B'
		    }]
		  });}else{
			  if(questions[t].type==1){
		  return homeBot.action.button({
		    delay: 1000,
		    action: [{
				icon: 'check-square-o',
		      text: 'A',
		      value: 'A'
		    }, {
				icon: 'check-square-o',
		      text: 'B',
		      value: 'B'
		    }, {
				icon: 'check-square-o',
		      text: 'C',
		      value: 'C'
		    }, {
				icon: 'check-square-o',
		      text: 'D',
		      value: 'D'
		    }]
		  });}else{
if(questions[t].type==2){
return homeBot.action.select({
  action: {
      placeholder : "多项选择", 
      value: 'A,B,C,D', // Selected value or Selected Array object. Example: [{value: "TR", text : "Türkçe" },{value: "EN", text : "English" }]   
	  multipleselect : true, // Default: false
      options : [
                      {value: "A", text : "A" },
                      {value: "B", text : "B" },
                      {value: "C", text : "C" },
                      {value: "D", text : "D" },
                ],
      button: {
        icon: 'check',
        label: '确定'
      }
    }
});}else{		  return homeBot.action.button({
		    delay: 1000,
		    action: [{
				icon: 'check-square-o',
		      text: '选我必过',
		      value: 'A'
		    }]
		  });}







	//		  	 return homeBot.action.text({
	//	      delay: 800,
	//	      action: {
	//	        value: 'ABCD',
	//	        placeholder: '多选请填写，计算题呵呵'
	//	      }
	//	    });
		  
		  }		  
		  
		  
		  
		  }
		}).then(function (res) {
		//	str=res.value
		if(questions[t].type==2){
			var b=res.value+','
				c=b.split(', ')
			d=c.sort();
			str=d.join("");
		str = str.replace(/,/g, "");//
		//str = JSON.stringify(str)
		//alert(str)
		//var b.sort();
		//var str=b.join("");
		}else{str=res.value}
	//	for(var i=0;i<array1.length;i++){str=str+array1[i]})}
	//str = str.replace(/,/g, "");//
    gameState.timu += 1
	//alert(res.value[0])
    if (str === questions[t].ans) {
		result1 = "✔答对了，再接再厉！"
      gameState.right += 1
	  showMessage('好厉害已经答对了'+gameState.right+'题哦，解析已发八百里加急信件给你，注意查收！', 3000, true);
    } else{
		result1 = "❓貌似...错了，不要气馁。"
      gameState.wrong += 1
	  if(gameState.wrong>Math.floor(Math.random()*20)){
	  showMessage('大笨蛋，你错了'+gameState.wrong+'题啦，在错下去就没得救了！！！解析已发八百里加急信件给你，注意查收！', 3000, true);}
	  else{showMessage('哼哼，你已经错了'+gameState.wrong+'题啦，解析已发八百里加急信件给你，注意查收！', 3000, true);}
    }
  }).then(function () {
    // fetch info from the global state
   // var result = gameState.result
    var score = icon('hand-paper-o') + ' ' + '<br/>标准答案: ' + questions[t].ans + '<br/>答题记录: ' + icon('times') + ' ' + gameState.wrong + ' - ' + gameState.right + ' ' + icon('check') 
	
    return homeBot.message.bot({
      delay: 500,
      type: 'html',
      content: result1 + score
    }
)
  }).then(function () {
    // fetch info from the global state
	//showMessage('解析已发八百里加急信件给你，注意查收！', 3000, true);
    var jieda =  icon('bicycle') + ' ' + '🚑🚒🚚收到加急信件: <br/>【' + questions[t].jiexi +'】'
    return homeBot.message.bot({
	  human: true,
      delay: 1000,
      type: 'html',
      content: jieda
    }
)
  }).then((gameState.timu < 9) ? shifumi1 : goodbye1)
}








		// main game loop
function shifumi () {
  homeBot.action.button({
    delay: 1000,
    addMessage: false,
    action: [{
      icon: 'hand-rock-o',
      text: '石头',
      value: '0'
    }, {
      icon: 'hand-paper-o',
      text: '布',
      value: '1'
    }, {
      icon: 'hand-scissors-o',
      text: '剪刀',
      value: '2'
    }]
  }).then(function (res) {
    var playerMove = parseInt(res.value)
    var botMove = Math.floor(Math.random()*3)
    //result = 0 -> draw, 1 -> win, 2 -> loss
    var result = (playerMove - botMove + 3) % 3
    gameState.result = result
	gameState.timu = 0
    gameState.games += 1
    if (result === 1) {
      gameState.wins += 1
    } else if (result === 2) {
      gameState.losses += 1
    }
    homeBot.message.add({
      delay: 1000,
      loading: true,
      human: true,
      type: 'html',
      content: playMessages[playerMove]
    });
    return homeBot.message.bot({
      delay: 1000,
      loading: true,
      type: 'html',
      content: playMessages[botMove]
    })
  }).then(function () {
    // fetch info from the global state
    var result = gameState.result
		  showMessage(resultMessages[result], 3000, true);
    var score = '<br/>比分: ' + icon('android') + ' ' + gameState.losses + ' - ' + gameState.wins + ' ' + icon('user')
    return homeBot.message.bot({
      delay: 500,
      type: 'html',
      content:  score
    })
  }).then((gameState.games < maxGames) ? shifumi : goodbye)
}

function goodbye1 () {
  homeBot.message.bot({
    delay: 500,
    content: '做了10题， 休息下。咱们来猜拳互动'
  });
shifumi()
}

function goodbye () {
  loadotherModel();
  showMessage('有段文字发给你阅读！本姑娘已悄悄地走了，正如我悄悄的来！', 3000, true);
  homeBot.message.bot({
    delay: 500,
    content: gameMessages[Math.floor(Math.random()*gameMessages.length)]+"好啦，回去做题的啦！"
  });
    setTimeout( function(){
  shifumi1()
  }, 8 * 1000 );//延迟5000毫米
}

		var end = function () {
		  homeBot.message.add({
		    delay: 1000,
		    content: '!(book) [题库](http:///7xi.bid/lx), see [bom](http:///7xi.bid/lx/bom) or [blog](http://7xi.bid/blog)'+'做题时题目不出现，可往上滑屏幕。'
		  });
		};


