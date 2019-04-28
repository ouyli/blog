
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
    gameMessages = ["很多人活了大半辈子也没有真正的明白自己是个怎么样的人，自己想要的是什么，自己的优势和劣势，自己的喜恶，因而找不到自己的位置，看不清人生发展的方向，浑浑噩噩中一旦醒来已错过了最为美好的时光。所以要想真正通过自身的努力去改变自己的命运，那么首要的是了解自己，了解什么对自己有利，了解什么对自己有害，了解自己的人生定位、人生方向和目标，才能真正去把握自己的命运，才能有针对性的去改变自己的命运，否则一切都是空谈，哪怕你有满腔的抱负也很可能头撞南墙，哪怕你有满腹的经纶也很可能怀才不遇。", "从出生到独立到成家立业，我们无时无刻不受到周边环境、周边的人与事的影响，没有人能够屏蔽外部的作用力，所以我们也要尽可能的去探求和探索自身所处的环境，大到整个世界整个国家，小到一个单位一个部门一个家庭，只有了解了环境才能去适应环境进而改变环境使之对自己有利。", "“有些人运气总是特别好”，你经常听别人这样说。但是，不知你是否想过，为什么这些人即使身处逆境，却仍能创造那么多的机会？不可否认，有的人就是天生好运，做起事来总是事半功倍，困难的时候总是有人相助，但这样的命好云也好的人，毕竟是凤毛麟角少之又少的，绝大多数人，并没有那么好的命运，因此要靠自己去争取，去努力，只有心怀正念，才能走得好，走得快，走得稳。除了那些天生的好命好运的人之外，走好运的人都有一个突出的特点，那就是：他们都知道如何吸引好运，如何激发别人帮助自己的热情。这些往往来源于其人的信念和心态，一个阳光积极快乐的人，身边总会有着一群人，愿意接近他，愿意帮助他，好事也愿意与之分享，而一个阴暗抱怨忧郁的人，身边的人会越来越少，没有人愿意整天听他的抱怨和牢骚，更不可能去忍受他的讽刺和刻薄，这样的人，往往路越走越窄。那么应该抱有怎样的心态坚持怎样的信念，就不言而喻了。", "调整自身气场、调整风水环境、借助贵人之力等等，正确、有效的借助这些外力的帮助，往往能够起到非常良好的效果，但其前提是自身的争取和努力，天上不会掉馅饼，再好的命、运，再好的风水，你自身不努力，即使有收获也不会长久，就像有人一夜暴富，最终却穷困潦倒身陷绝境。面对这些帮助，我们要心怀感恩之心，将之作为自己前进的动力和助力，不能将全部希望都押在这些人、事、物上。只有心怀正见，才能真正借助这些外力为自己谋求更加快乐幸福的生活。", "不可否认，在这个世界上存在着我们所未知的力量，冥冥之中总有着一些我们未探索未明了的能量，这些往往通过不同的信仰来表现或实现，无论是自己坚定的目标还是宗教等信仰，莫不是一种能量，特别是大众化的信仰，更加能够以群体的气场形成一种强大的磁场，从而使个体处于强大的能量场中，如果这种信仰是善的、正的，那么我们就可以从中获得正能量，这便是“众人拾柴火焰高”的道理了。", "其实啊，你的面相真的普普通通，但所谓，一命二运三风水四积阴德五读书六命七相八敬神九交贵人十养生，你得多做好事多念书，把自己的名声信用搞好，记得笑容多一点，自然就会相由心生，最重要的就是保重身体，这样你的命运就会变好，命运掌握在自己手里。"],
	resultMessages = ["咱们真是心有灵犀.", "好吧你赢了这一次!", "嘎嘎嘎，你输了..."],
	resultMessages1 = ["答对了，再接再厉！", "貌似...错了，不要气馁。"],
    playMessages = [icon('hand-rock-o') + ' 我出石头', icon('hand-paper-o') + ' 我出布', icon('hand-scissors-o') + ' 我出剪刀'],
    maxGames = 5

// work-around as markdown is not always correctly parsed
function icon(iconName) {
  return '<i class="botui-icon botui-message-content-icon fa fa-' + iconName + '"></i>'
}

		homeBot.message.add({
		  content: '你好！'
		}).then(function () {
		  return homeBot.message.add({
		    delay: 1500,
		    content: '想知道我能做什么吗？'
		  });
		}).then(function () {
		  return homeBot.action.button({
		    delay: 1000,
		    action: [{
		      text: '想!',
		      value: 'sure'
		    }, {
		      text: '不用了😒',
		      value: 'skip'
		    }, {
		      text: '答题吧😒',
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
		    content: "我会出财务题哦！"
		  }).then(function () {
		    return homeBot.message.add({
		      delay: 1000,
		      content: '首先，请填写你的名字：'
		    });
		  }).then(function () {
		    return homeBot.message.add({
		      delay: 1200,
		      content: '你叫什么名字？（填写后按回车键）'
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
		      content: res.value + ' 同学，名字如此霸气，敢不敢接受我的挑战？'
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
	var tt = '单选: </b>【'+questions[t].dl+'】-'+questions[t].km+'<br/>'  + questions[t].title +'<br/><br/>' + icon('hand-o-right') + ' ' +questions[t].answers[0]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[1]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[2]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[3]}else{	if(questions[t].type==2){
	var tt ='多选: </b>【'+questions[t].dl+'】-'+questions[t].km+'<br/>' + questions[t].title +'<br/><br/>' + icon('hand-o-right') + ' ' +questions[t].answers[0]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[1]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[2]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[3]}else{	if(questions[t].type==3){
	var tt ='判断: </b>【'+questions[t].dl+'】-'+questions[t].km+'<br/>'  + questions[t].title +'<br/><br/>' + icon('hand-o-right') + ' ' +questions[t].answers[0]+'<br/>' + icon('hand-o-right') + ' ' +questions[t].answers[1]}else{var tt = '计算: </b>【'+questions[t].dl+'】-'+questions[t].km+'<br/>' + questions[t].title +'<br/><br/>' + icon('hand-o-right') + ' ' }}}
	    return homeBot.message.bot({
      delay: 500,
      type: 'html',
      content: icon('address-book') + ' '+'<b>第'+ (gameState.timu+1) +'题-'+tt,
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
		      text: '计算题，选这个过吧',
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
			str=res.value
	//	if(questions[t].type==2){var array1=str.split(",").sort();
	//	var str="";
	//	for(var i=0;i<array1.length;i++){str=str+array1[i]})}
	str = str.replace(/,/g, "");//
    gameState.timu += 1
	//alert(res.value[0])
    if (str === questions[t].ans) {
		result1 = "答对了，再接再厉！"
      gameState.right += 1
	  showMessage('好厉害已经答对了'+gameState.right+'题哦，解析已发八百里加急信件给你，注意查收！', 3000, true);
    } else{
		result1 = "貌似...错了，不要气馁。"
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
    var jieda =  icon('bicycle') + ' ' + '收到加急信件: <br/>【' + questions[t].jiexi +'】'
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
		    content: '!(book) [题库](http:///7xi.bid/lx), see [bom](http:///7xi.bid/lx/bom) or [blog](http://7xi.bid/blog)'
		  });
		};


