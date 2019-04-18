var EXERCISE_TYPE = {
    random: 'random',
    sequence: 'sequence',
    error: 'error'
};

var CLASS_LEVEL = {
    classA: 'class-a',
    classB: 'class-b',
    classC: 'class-c'
};

function App(options){
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    var self = this;
    this.options = options;
    this.options.routes.index = _.template($(this.options.routes.index).html());
    this.options.routes.readme = _.template($(this.options.routes.readme).html());
    this.options.routes.others = _.template($(this.options.routes.others).html());
    this.options.question.template = _.template($(this.options.question.template).html());
    function getTitle(hash){
        switch(hash){
            case CLASS_LEVEL.classA:
                return '中级财务会计 - ';
            case CLASS_LEVEL.classB:
                return '中级经济法 - ';
            case CLASS_LEVEL.classC:
                return '中级财务管理 - ';
            default:
                return '';
        }
    }

    $(window).on('hashchange', function(){
        var root = utils.getRoot(location.hash);
        if(_.contains([CLASS_LEVEL.classA, CLASS_LEVEL.classB, CLASS_LEVEL.classC], root)){
            self.switchTo(self.options.routes.others(), getTitle(root));
            self.updateExercise(root, utils.getExerciseType(location.hash));
            self.load(root, utils.getExerciseType(location.hash));
            $(self.options.exerciseType.random).on('click', function(){
                location.hash = '#' + utils.getRoot(location.hash) + '/' + EXERCISE_TYPE.random;
            });
            $(self.options.exerciseType.sequence).on('click', function(){
                location.hash = '#' + utils.getRoot(location.hash) + '/' + EXERCISE_TYPE.sequence;
            });
            $(self.options.exerciseType.error).on('click', function(){
                location.hash = '#' + utils.getRoot(location.hash) + '/' + EXERCISE_TYPE.error;
            });
            $(self.options.toolbar.clearAllErrorAnswers).on('click', function(){
                self.clearAllErrorAnswers(root);
            });
            $(self.options.toolbar.clearAll).on('click', function(){
                self.clearAll();
            });
        } else if(root == 'readme'){
            self.switchTo(self.options.routes.readme());
        } else {
            self.switchTo(self.options.routes.index());
        }
    });

    $(window).trigger('hashchange');
}

App.prototype.showQuestion = function(index, question, totalCount){
    question.randomAnswers();
    var self = this;
    var classLevel = utils.getRoot(location.hash);
    var exerciseType = utils.getExerciseType(location.hash);
    $(self.options.question.container)
        .empty()
        .append(self.options.question.template(question))
/*
        .find('button')
        .on('click', function(){
            var btn = $(this);
//单选多选控制
              if (btn.hasClass('list-group-item-danger')) {
                  btn.removeClass('list-group-item-danger');
				  
               } else {
                btn.addClass('list-group-item-danger');
            }

//单选多选控制

            if(btn.attr('iscorrect') === 'true'){
                self.questions.next();
            } else {
                self.addErrorQuestions(classLevel, question);
               // btn.addClass("list-group-item-danger");
            }
        });
*/
//alert(JSON.stringify(question.ans))
// zjia	
        shuffle(question.answers)
		if(question.answers.length>0){
		var xh=["A","B","C","D","E","F"];
		    ytxh="";
			zqda=""
		answerscontentFob='<button class="list-group-item" id="'+ question.answers[0].substr(0,1) + '" title="原题该选项为:'+ question.answers[0].substr(0,1) + '">'+xh[0]+'. '+ question.answers[0].substr(1) + '</button>';
		 ytxh=ytxh+question.answers[0].substr(0,1);
		 if(question.ans.indexOf(question.answers[0].substr(0,1)) != -1) { zqda=zqda + xh[0];}
	     for (var i=1; i<question.answers.length; i++) {
		answerscontentFob +='<button class="list-group-item" id="'+ question.answers[i].substr(0,1) + '" title="原题该选项为:'+ question.answers[i].substr(0,1) + '">'+xh[i]+'. '+ question.answers[i].substr(1) + '</button>';
		ytxh=ytxh + question.answers[i].substr(0,1);
		if(question.ans.indexOf(question.answers[i].substr(0,1)) != -1) { zqda=zqda + xh[i];}
	         };
	         $("#answers").append(answerscontentFob);	
              if(question.type==='2') {
			    $("#uanswers .list-group-item").html("确认答案(多选)")
			  }
			 }
// zjia
// 选择控制
				$('.list-group-item').click(function() {
			   if($("#uanswers .list-group-item-danger").text()!="题目已答不再修改,点击进入下一题"){
               var thisLi = $(this);
               if (thisLi.hasClass('list-group-item-danger')) {
                  thisLi.removeClass('list-group-item-danger');
				//  self.questions.next();
               }  else {
				   if(question.type!=='2') {
                thisLi.parents('#answers').children('button').removeClass('list-group-item-danger');  }  // 
                 thisLi.addClass('list-group-item-danger');
				// self.addErrorQuestions(classLevel, question);
            }
			   }
            });
// 选择控制

//判断
$('#uanswers .list-group-item').click(function() {
	if($("#uanswers .list-group-item-danger").text()!="题目已答不再修改,点击进入下一题"){
//你的答案
            itme=[]
            itmex=""
             $('#answers .list-group-item-danger').each(function(index) {  
			     it=$(this).attr("id")
				 itx=$(this).index()
										   if(itx==0){itx='A';}
										   if(itx==1){itx='B';}
										   if(itx==2){itx='C';}
										   if(itx==3){itx='D';}
										   if(itx==4){itx='E';}
										   if(itx==5){itx='F';}
				itme=itme+it  
				itmex=itmex+itx
			     });
				UAS=_.sortBy(itme) 
				itmey=""
				for (var i = 0; i < UAS.length; i++){
				itmey=itmey+UAS[i]
				}
if(question.type==='4'){itmey=itmey+"计算题，查看答案！";}	                
//你的答案 alert(itmey);
if(itmey != ""){                              //有答案
            if(itmey === question.ans ){
                self.questions.next();
            } else {
                self.addErrorQuestions(classLevel, question);
				  $("#jiexi").remove();
				 // $("#div1").empty();
				 answer='<div class="list-group-item" id="jiexi"><hr style="height:5px;border:none;border-top:5px ridge green;" /><b>PS:已记录错题，答错提示:</b>你的选项为：<b>'+ itmex + '。</b>答案为：<font color="red"><b>'+ zqda + '。</b></font><br>'
				 answer +='由于题目打乱选项次序，你的选项转换为原题选项为：<b>'+ itmey +'</b>，原题标准答案为：<font color="red"><b>'+ question.ans + '。</b></font><br>'
				 answer +='<font color="red"><b>(注意：原题标准答案并非题目上的选项。需转换，选项转换可以悬停在该选项上。)</b></font>'
				 answer +='<hr style="height:3px;border:none;border-top:3px double red;"><b>参考解析如下：【查看解析请注意对应选项依次为:'+ ytxh+'】</b><br>'+ question.jiexi  + '<hr style="height:10px;border:none;border-top:10px groove skyblue;"></div>'
				 $("#answers").append(answer);
				 $("#uanswers .list-group-item-danger").html("题目已答不再修改,点击进入下一题")
            }
               }else{
				   $(this).removeClass('list-group-item-danger');
				   $("#uanswers .list-group-item").html("你没有选")
			   }



	}
	else{
	self.questions.next();}
	});
//判断



    this.updateProgress(index, totalCount);
    this.saveCurrentIndex(classLevel, exerciseType, index);




};

App.prototype.updateProgress = function(index, totalCount){
    var width = (index + 1) / totalCount * 100.0;
    width = width.toFixed(0);
    $(this.options.progressbar).css("width", width + "%").text((index+1) + ' / ' + totalCount);
};

App.prototype.load = function(classLevel, exerciseType){
    var self = this;

    var storedQuestions = self.getStoredQuestions(classLevel, exerciseType);
    var storedIndex = self.getStoredIndex(classLevel, exerciseType);

    function gotData(data, isFromAjax){
        self.hideWaiting();
        if(isFromAjax){
            if(exerciseType == EXERCISE_TYPE.random){
                data = utils.randomizeData(data);
            }
            self.saveQuestions(classLevel, exerciseType, data);
        }

        self.questions = new Questions({
            data: data,
            onIndexChange: self.showQuestion.bind(self)
        });

        self.questions.setIndex(storedIndex);

        $(self.options.toolbar.first).on('click', self.questions.first.bind(self.questions));
        $(self.options.toolbar.prev).on('click', self.questions.prev.bind(self.questions));
        $(self.options.toolbar.next).on('click', self.questions.next.bind(self.questions));
        $(self.options.toolbar.last).on('click', self.questions.last.bind(self.questions));

        self.questions.next();

    }

  //  function Qanswers(question){
//	if(JSON.stringify(question.answers.length)>4){
//		answerscontentFob=''
	//	 for (var i=5; i<question.answers.length+1; i++)
	//	 {answerscontentFob +='<button class="list-group-item" iscorrect="'+ question.answers[i].is_correct+ '">E. '+ question.answers[i].text + '</button>';
	//	  }
	//	  $("#answers").append(answerscontentFob);
//}
//	}


    if(storedQuestions.length > 0){
        console.log('read from local');
        gotData(storedQuestions);
        return;
    }
    if(storedQuestions.length === 0 && exerciseType != EXERCISE_TYPE.error){
        console.log('read from json file');
        self.showWaiting();
        $.ajax({
            dataType: "json",
            url: classLevel + '.json',
            success: gotData,
            error: function(a1, a2){
                alert(a2);
            }
        });
        return;
    }

    gotData([], true);

};

App.prototype.switchTo = function(html, pageTitle){
    var self = this;
    if(_.isUndefined(pageTitle)){
        pageTitle = '';
    }

    $(self.options.titleSuffix).text(pageTitle);
    $(self.options.container).empty().append(html);
};

App.prototype.updateExercise = function(classLevel, exerciseType){
    $(this.options.exerciseType.random).parent('ul').find('li.active').removeClass('active');
    $(this.options.exerciseType.random).parent('ul').find('li[exercise="' + exerciseType + '"]').addClass('active');
    $(this.options.exerciseType.error).find('span.badge').text(this.getErrorQuestions(classLevel).length);
};

App.prototype.saveCurrentIndex = function(classLevel, exerciseType, index){
    localStorage.setItem('aroe.' + classLevel + '.index.' + exerciseType, index);
};

App.prototype.getStoredIndex = function(classLevel, exerciseType){
    var index = parseInt(localStorage.getItem('aroe.' + classLevel + '.index.' + exerciseType)) - 1;

    if(_.isNaN(index)){
        index = -1;
    }

    if(index < -1){
        index = -1;
    }

    return index;
};

App.prototype.saveQuestions = function(classLevel, exerciseType, questions){
    localStorage.setItem('aroe.' + classLevel + '.questions.' + exerciseType, JSON.stringify(questions));
};

App.prototype.getStoredQuestions = function(classLevel, exerciseType){
    var q = localStorage.getItem('aroe.' + classLevel + '.questions.' + exerciseType);
    if(q == null){
        q = '[]';
    }

    return JSON.parse(q);

};

App.prototype.getErrorQuestions = function(classLevel){
    return this.getStoredQuestions(classLevel, EXERCISE_TYPE.error);
};

App.prototype.addErrorQuestions = function(classLevel, question){
    console.log(question);
    var errorQuestions = this.getErrorQuestions(classLevel);

    if(!_.any(errorQuestions, function(q){return q.title == question.title;})){
        errorQuestions.push(question);
        this.saveQuestions(classLevel, EXERCISE_TYPE.error, errorQuestions);
        $(this.options.exerciseType.error).find('span.badge').text(errorQuestions.length);
    }
};

App.prototype.clearAllErrorAnswers = function(classLevel){
    localStorage.removeItem('aroe.' + classLevel + '.questions.' + EXERCISE_TYPE.error);
    localStorage.removeItem('aroe.' + classLevel + '.index.' + EXERCISE_TYPE.error);
    $(this.options.exerciseType.error).find('span.badge').text('0');
};

App.prototype.clearAll = function(){
    localStorage.clear();
    location.hash = '#index';
};

App.prototype.showWaiting = function(){
    $(this.options.waiting).modal('show');
};

App.prototype.hideWaiting = function(){
    $(this.options.waiting).modal('hide');
};

