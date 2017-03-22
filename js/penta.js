var Penta = {
    _name: null,
    _key: null,
    _ssl: null,
    _lsl: null,
    _buttons: null,
    _velocity: null,
    _sol: ['B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B'],
    _do_1: ['G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G'],
    _do_2: ['E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E'],
    _do_3: ['C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C'],
    _do_4: ['A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A'],
    _fa_3: ['F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F'],
    _fa_4: ['D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D','C','B','A','G','F','E','D'],
    _total: 0,
    _correct: 0,
    _incorrect: 0,
    _answered: 1,
    _answer_tmp: null,
    _show_tmp: null,
    _ball_ref: null,
    _where: 1,
    _run: null,
    
    Start: function(){
        var self = this;
        
        self._where = 2;
        
        self._name = $('#name').val() ? $('#name').val() : $('#name_anonymous').val();
        self._key = $('#key').val();
        self._ssl = $('#ssl').val();
        self._lsl = $('#lsl').val();
        self._buttons = $('#buttons').val();
        self._velocity = $('#velocity').val() > 0 ? $('#velocity').val() : 1;
    
        $('#your_name').html(self._name);
        
        $('.logo').css('display', 'none');
        
        if(self._key == 1){
            $('#logo_sol').css('display', 'block');
            $('#clef_line').html(' ');
        }
        
        if(self._key >= 2 && self._key <= 5){
            $('#logo_do').css('display', 'block');
            $('#clef_line').html($('#clef_do_name').val()+' '+(self._key - 1)+'&ordf; '+$('#clef_line_name').val());
        }
        
        if(self._key == 6 || self._key == 7){
            $('#logo_fa').css('display', 'block');
            $('#clef_line').html($('#clef_fa_name').val()+' '+(self._key - 3)+'&ordf; '+$('#clef_line_name').val());
        }         
        
        if(self._buttons == 1){
            $('#letters').css('display', 'none');
            $('#names').css('display', 'block');
        }else{
            $('#names').css('display', 'none');
            $('#letters').css('display', 'block');
        }
        
        $('#configuration').css('display', 'none');
        $('#start').css('display', 'block');
        
        self.Show();
        
        self._run = window.setInterval(function(){
            self.Show();  
        }, self._velocity * 1000);        
    },
    
    Rand: function(total){
        return Math.floor(Math.random() * total) + 1;
    },
    
    RandMinAndMax: function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    Clean: function(){
        $('.ball').css('display', 'none');
    },
    
    Show: function(){
        var self = this;
        
        self.Clean();
        
        if(self._ball_ref){
            self._ball_ref.css('background','black');
        }
        
        if(self._answered == 0){
            $('#incorrect').html(++self._incorrect);
            $('#total').html(++self._total);
        }
        
        var width = $('#start #right #center').width() - 90;
        
        var position = $("#start #right #center").position();
        
        var total_position = Math.floor(width / 20);
        
        var ssl = 0, lsl = 0;
        
        if(self._ssl > 0){
            ssl = self._ssl * 2;
        }
        
        if(self._lsl > 0){
            lsl = self._lsl * 2;
        }
        
        var total = 9 + ssl + lsl;
        
        var position_x = self.Rand(total_position);
        
        var x = (position_x * 20) + position.left;
        
        if(ssl > 0){
            ssl = 10 - ssl;
        }else{
            ssl = 10;
        }
        
        if(lsl > 0){
            lsl = 10 - lsl;
        }else{
            lsl = 10;
        }
        
        var min = ssl + 1;
        var max = 29 - lsl;     
        
        var r = self.RandMinAndMax(min, max);
        
        if(r >= 1 && r <= 10){
            var r2 = 0;
            switch(r){
                case 1:
                    r2 = 10;
                    break;
                case 2:
                    r2 = 9;
                    break;
                case 3:
                    r2 = 8;
                    break;
                case 4:
                    r2 = 7;
                    break;
                case 5:
                    r2 = 6;
                    break;
                case 6:
                    r2 = 5;
                    break;
                case 7:
                    r2 = 4;
                    break;
                case 8:
                    r2 = 3;
                    break;
                case 9:
                    r2 = 2;
                    break;
                case 10:
                    r2 = 1;
                    break;                
            }            
            $('#ssl_'+r2).css('margin-left', x+'px');
            $('#ssl_'+r2).css('display', 'block');
            self._ball_ref = $('#ssl_'+r2+' .circle').eq(0);
        }
        
        if(r >= 11 && r <= 19){
            $('#penta_'+(r-10)).css('margin-left', x+'px');
            $('#penta_'+(r-10)).css('display', 'block');
            self._ball_ref = $('#penta_'+(r-10)+' .circle').eq(0);
        }
        
        if(r >= 20 && r <= 29){
            $('#lsl_'+(r-19)).css('margin-left', x+'px');
            $('#lsl_'+(r-19)).css('display', 'block');
            self._ball_ref = $('#lsl_'+(r-19)+' .circle').eq(0);
        }
        
        self._show_tmp = r - 1;
        
        if(self._buttons == 1){
            $('#names_1').attr('disabled', false);
            $('#names_1').prop('disabled', false);
            $('#names_2').attr('disabled', false);
            $('#names_2').prop('disabled', false);
            $('#names_3').attr('disabled', false);
            $('#names_3').prop('disabled', false);
            $('#names_4').attr('disabled', false);
            $('#names_4').prop('disabled', false);
            $('#names_5').attr('disabled', false);
            $('#names_5').prop('disabled', false);
            $('#names_6').attr('disabled', false);
            $('#names_6').prop('disabled', false);
            $('#names_7').attr('disabled', false);
            $('#names_7').prop('disabled', false);            
        }else{
            $('#letters_1').attr('disabled', false);
            $('#letters_1').prop('disabled', false);
            $('#letters_2').attr('disabled', false);
            $('#letters_2').prop('disabled', false);
            $('#letters_3').attr('disabled', false);
            $('#letters_3').prop('disabled', false);
            $('#letters_4').attr('disabled', false);
            $('#letters_4').prop('disabled', false);
            $('#letters_5').attr('disabled', false);
            $('#letters_5').prop('disabled', false);
            $('#letters_6').attr('disabled', false);
            $('#letters_6').prop('disabled', false);
            $('#letters_7').attr('disabled', false);
            $('#letters_7').prop('disabled', false);            
        }
        
        self._answered = 0;
    },
    
    Answer: function(){
        var self = this;
        
        $('#setting_start').attr('disabled', true);
        $('#setting_start').prop('disabled', true);
        $('#setting_stop').attr('disabled', false);
        $('#setting_stop').prop('disabled', false);           
        
        if(self._buttons == 1){
            $('#names_1').attr('disabled', true);
            $('#names_1').prop('disabled', true);
            $('#names_2').attr('disabled', true);
            $('#names_2').prop('disabled', true);
            $('#names_3').attr('disabled', true);
            $('#names_3').prop('disabled', true);
            $('#names_4').attr('disabled', true);
            $('#names_4').prop('disabled', true);
            $('#names_5').attr('disabled', true);
            $('#names_5').prop('disabled', true);
            $('#names_6').attr('disabled', true);
            $('#names_6').prop('disabled', true);
            $('#names_7').attr('disabled', true);
            $('#names_7').prop('disabled', true);            
        }else{
            $('#letters_1').attr('disabled', true);
            $('#letters_1').prop('disabled', true);
            $('#letters_2').attr('disabled', true);
            $('#letters_2').prop('disabled', true);
            $('#letters_3').attr('disabled', true);
            $('#letters_3').prop('disabled', true);
            $('#letters_4').attr('disabled', true);
            $('#letters_4').prop('disabled', true);
            $('#letters_5').attr('disabled', true);
            $('#letters_5').prop('disabled', true);
            $('#letters_6').attr('disabled', true);
            $('#letters_6').prop('disabled', true);
            $('#letters_7').attr('disabled', true);
            $('#letters_7').prop('disabled', true);            
        }  
        
        // sol
        if(self._key == 1){
            console.log(self._sol[self._show_tmp]);
            console.log(self._answer_tmp);
            if(self._sol[self._show_tmp] == self._answer_tmp){
                $('#correct').html(++self._correct);
                self._ball_ref.css('background','green');
            }else{
                $('#incorrect').html(++self._incorrect);
                self._ball_ref.css('background','red');
            }
            $('#total').html(++self._total);
        }
        
        // do first line
        if(self._key == 2){
            if(self._do_1[self._show_tmp] == self._answer_tmp){
                $('#correct').html(++self._correct);
                self._ball_ref.css('background','green');
            }else{
                $('#incorrect').html(++self._incorrect);
                self._ball_ref.css('background','red');
            }
            $('#total').html(++self._total);
        }
        
        // do second line
        if(self._key == 3){
            if(self._do_2[self._show_tmp] == self._answer_tmp){
                $('#correct').html(++self._correct);
                self._ball_ref.css('background','green');
            }else{
                $('#incorrect').html(++self._incorrect);
                self._ball_ref.css('background','red');
            }
            $('#total').html(++self._total);
        }
        
        // do third line
        if(self._key == 4){
            if(self._do_3[self._show_tmp] == self._answer_tmp){
                $('#correct').html(++self._correct);
                self._ball_ref.css('background','green');
            }else{
                $('#incorrect').html(++self._incorrect);
                self._ball_ref.css('background','red');
            }
            $('#total').html(++self._total);
        }
        
        // do fourth line
        if(self._key == 5){
            if(self._do_4[self._show_tmp] == self._answer_tmp){
                $('#correct').html(++self._correct);
                self._ball_ref.css('background','green');
            }else{
                $('#incorrect').html(++self._incorrect);
                self._ball_ref.css('background','red');
            }
            $('#total').html(++self._total);
        }
        
        // fa third line
        if(self._key == 6){
            if(self._fa_3[self._show_tmp] == self._answer_tmp){
                $('#correct').html(++self._correct);
                self._ball_ref.css('background','green');
            }else{
                $('#incorrect').html(++self._incorrect);
                self._ball_ref.css('background','red');
            }
            $('#total').html(++self._total);
        }
        
        // fa fourth line
        if(self._key == 7){
            if(self._fa_4[self._show_tmp] == self._answer_tmp){
                $('#correct').html(++self._correct);
                self._ball_ref.css('background','green');
            }else{
                $('#incorrect').html(++self._incorrect);
                self._ball_ref.css('background','red');
            }
            $('#total').html(++self._total);
        }         
        
        self._answered = 1;
        
        clearInterval(self._run);
        
        window.setTimeout(function(){
            self.Show();
            
            self._run = window.setInterval(function(){
                self.Show();  
            }, self._velocity * 1000);             
        }, 500);         
    },
    
    Run: function(){
        var self = this;
        
        $('#united-kingdom').mouseenter(
            function(){
                $('#united-kingdom').css('display', 'none');
                $('#united-states').css('display', 'inline-block');
            }
        );
        
        $('#united-states').mouseleave(
            function(){
                $('#united-kingdom').css('display', 'inline-block');
                $('#united-states').css('display', 'none');
            }
        );        
        
        $('#united-kingdom, #united-states').on("click",
            function(){
                Languages.Default('English');
                Languages.Start();
                $('#languages').css('display', 'none');
                $('#languages-32').css('display', 'block');
                $('#configuration').css('display', 'block');
            }
        );
        
        $('#portugal').mouseenter(
            function(){
                $('#portugal').css('display', 'none');
                $('#brazil').css('display', 'inline-block');
            }
        );
        
        $('#brazil').mouseleave(
            function(){
                $('#portugal').css('display', 'inline-block');
                $('#brazil').css('display', 'none');
            }
        );           
        
        $('#portugal, #brazil').on("click",
            function(){
                Languages.Default('Portugues');
                Languages.Start();
                $('#languages').css('display', 'none');
                $('#languages-32').css('display', 'block');
                $('#configuration').css('display', 'block');                
            }
        );
        
        $('#united-kingdom-32').mouseenter(
            function(){
                $('#united-kingdom-32').css('display', 'none');
                $('#united-states-32').css('display', 'inline-block');
            }
        );
        
        $('#united-states-32').mouseleave(
            function(){
                $('#united-kingdom-32').css('display', 'inline-block');
                $('#united-states-32').css('display', 'none');
            }
        );        
        
        $('#united-kingdom-32, #united-states-32').on("click",
            function(){
                Languages.Default('English');
                Languages.Start();
            }
        );
        
        $('#portugal-32').mouseenter(
            function(){
                $('#portugal-32').css('display', 'none');
                $('#brazil-32').css('display', 'inline-block');
            }
        );
        
        $('#brazil-32').mouseleave(
            function(){
                $('#portugal-32').css('display', 'inline-block');
                $('#brazil-32').css('display', 'none');
            }
        );           
        
        $('#portugal-32, #brazil-32').on("click",
            function(){
                Languages.Default('Portugues');
                Languages.Start();           
            }
        );         
        
        $('#button_start').on("click",
            function(){
                self.Start();
            }
        );
        
        $('#names_1').on("click",
            function(){
                self._answer_tmp = 'C';
                self.Answer();
            }
        );
        
        $('#names_2').on("click",
            function(){
                self._answer_tmp = 'D';
                self.Answer();
            }
        );
        
        $('#names_3').on("click",
            function(){
                self._answer_tmp = 'E';
                self.Answer();
            }
        );
        
        $('#names_4').on("click",
            function(){
                self._answer_tmp = 'F';
                self.Answer();
            }
        );
        
        $('#names_5').on("click",
            function(){
                self._answer_tmp = 'G';
                self.Answer();
            }
        );
        
        $('#names_6').on("click",
            function(){
                self._answer_tmp = 'A';
                self.Answer();
            }
        );
        
        $('#names_7').on("click",
            function(){
                self._answer_tmp = 'B';
                self.Answer();
            }
        );
        
        $('#letters_1').on("click",
            function(){
                self._answer_tmp = 'C';
                self.Answer();
            }
        );
        
        $('#letters_2').on("click",
            function(){
                self._answer_tmp = 'D';
                self.Answer();
            }
        );
        
        $('#letters_3').on("click",
            function(){
                self._answer_tmp = 'E';
                self.Answer();
            }
        );
        
        $('#letters_4').on("click",
            function(){
                self._answer_tmp = 'F';
                self.Answer();
            }
        );
        
        $('#letters_5').on("click",
            function(){
                self._answer_tmp = 'G';
                self.Answer();
            }
        );
        
        $('#letters_6').on("click",
            function(){
                self._answer_tmp = 'A';
                self.Answer();
            }
        );
        
        $('#letters_7').on("click",
            function(){
                self._answer_tmp = 'B';
                self.Answer();
            }
        );        
        
        $(document).keypress(
            function(e){
                if(self._where == 2){
                    var code = e.keyCode || e.which;
                    
                    
                    if(code == 49 || code == 67 || code == 99){
                        self._answer_tmp = 'C';
                        self.Answer();                    
                    }
                    
                    if(code == 50 || code == 68 || code == 100){
                        self._answer_tmp = 'D';
                        self.Answer();                    
                    }
                    
                    if(code == 51 || code == 69 || code == 101){
                        self._answer_tmp = 'E';
                        self.Answer();                    
                    }
                    
                    if(code == 52 || code == 70 || code == 102){
                        self._answer_tmp = 'F';
                        self.Answer();                    
                    }
                    
                    if(code == 53 || code == 71 || code == 103){
                        self._answer_tmp = 'G';
                        self.Answer();                    
                    }                    
                    
                    if(code == 54 || code == 65 || code == 97){
                        self._answer_tmp = 'A';
                        self.Answer();                    
                    }
                    
                    if(code == 55 || code == 66 || code == 98){
                        self._answer_tmp = 'B';
                        self.Answer();                    
                    }
                }
            }
        );
        
        $('#setting_back').on("click",
            function(){
                self._where = 1;
                
                self._total = 0;
                self._correct = 0;
                self._incorrect = 0;
                self._answered = 1;
                
                $('#total').html(0);
                $('#correct').html(0);
                $('#incorrect').html(0);
                
                clearInterval(self._run);
                
                $('#setting_start').attr('disabled', true);
                $('#setting_start').prop('disabled', true);
                $('#setting_stop').attr('disabled', false);
                $('#setting_stop').prop('disabled', false);
                
                $('#start').css('display', 'none');
                $('#configuration').css('display', 'block');
            }
        );
        
        $('#setting_start').on("click",
            function(){
                self.Show();
                
                self._run = window.setInterval(function(){
                    self.Show();  
                }, self._velocity * 1000);
                
                $('#setting_start').attr('disabled', true);
                $('#setting_start').prop('disabled', true);
                $('#setting_stop').attr('disabled', false);
                $('#setting_stop').prop('disabled', false);                 
            }
        );
        
        $('#setting_stop').on("click",
            function(){
                clearInterval(self._run);
                
                $('#setting_start').attr('disabled', false);
                $('#setting_start').prop('disabled', false);
                $('#setting_stop').attr('disabled', true);
                $('#setting_stop').prop('disabled', true);                 
            }
        );
        
        $('#setting_clean').on("click",
            function(){
                self._total = 0;
                self._correct = 0;
                self._incorrect = 0;
                self._answered = 1;
                
                $('#total').html(0);
                $('#correct').html(0);
                $('#incorrect').html(0);
            }
        );            
    }
};

Penta.Run();