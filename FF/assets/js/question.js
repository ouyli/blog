function Question(type, title, jiexi, answers, ans, km){
    this.type = type;
    this.title = title;
    this.jiexi = jiexi;
    this.answers = answers;
	this.ans = ans;
	this.km = km;
}


Question.prototype.randomAnswers = function(){
    _.each(this.answers, function(a){
        a.randOrder = Math.random();
    });

    this.answers = _.sortBy(this.answers, 'randOrder');
};

function shuffle(array) {
    var m = array.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function Questions(options){
    this.options = options;
    this.questions = _.map(options.data, function(o){
        return new Question(o.type, o.title, o.jiexi, o.answers, o.ans, o.km);
    });
    this.index = -1;
    this.totalCount = options.data.length;

}

Questions.prototype.first = function(){
    if(this.index != 0){
        this.index = 0;
        this.options.onIndexChange(this.index, this.questions[this.index], this.totalCount);
    }
};

Questions.prototype.prev = function(){
    if(this.index > 0){
        this.index--;
        this.options.onIndexChange(this.index, this.questions[this.index], this.totalCount);
    }
};

Questions.prototype.next = function(){
    if(this.index < this.totalCount - 1){
        this.index++;
        this.options.onIndexChange(this.index, this.questions[this.index], this.totalCount);
    }


};

Questions.prototype.last = function(){
    if(this.index != this.totalCount - 1){
        this.index = this.totalCount - 1;
        this.options.onIndexChange(this.index, this.questions[this.index], this.totalCount);
    }
};

Questions.prototype.setIndex = function(index){
    this.index = index;
};

Questions.prototype.statistics = function(){
    return {
        totalCount: this.totalCount,
        currentIndex: this.index,
        currentPercentage: this.index / this.totalCount * 100.0
    };
};