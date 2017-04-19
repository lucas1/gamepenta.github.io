var Languages = {
    _language: 'English',
    
    Default: function(language){
        this._language = language;
    },
    
    English: {
        name: 'Name',
        your_name: 'Your Name',
        key: 'Key',
        key_g: 'G Key',
        key_c_1st_line: 'C Key 1st Line',
        key_c_2nd_line: 'C Key 2nd Line',
        key_c_3rd_line: 'C Key 3rd Line',
        key_c_4th_line: 'C Key 4th Line',
        key_f_3rd_line: 'F Key 3rd Line',
        key_f_4th_line: 'F Key 4th Line',        
        ssl: 'Superior Supplementary Lines',
        lsl: 'Lower Supplementary Lines',
        without_lines: 'Without Lines',
        up_to_line_1: 'Up to Line 1',
        up_to_line_2: 'Up to Line 2',
        up_to_line_3: 'Up to Line 3',
        up_to_line_4: 'Up to Line 4',
        up_to_line_5: 'Up to Line 5',        
        buttons: 'Buttons',
        notes_names: 'Notes Names',
        key_letters: 'Key Letters',
        velocity: 'Velocity',
        seconds: 'Seconds',
        start: 'Start',
        anonymous: 'Anonymous',
        total: 'Total',
        hits: 'Hits',
        errors: 'Errors',
        name_do: 'Do',
        name_re: 'Ré',
        name_mi: 'Mi',
        name_fa: 'Fa',
        name_sol: 'Sol',
        name_la: 'La',
        name_si: 'Si',
        button_return: 'Return',
        button_start: 'Start',
        button_stop: 'Stop',
        button_clean: 'Clean',
    },
    
    Portugues: {
        name: 'Nome',
        your_name: 'Seu Nome',
        key: 'Clave',
        key_g: 'Sol',
        key_c_1st_line: 'Dó 1&ordf; Linha',
        key_c_2nd_line: 'Dó 2&ordf; Linha',
        key_c_3rd_line: 'Dó 3&ordf; Linha',
        key_c_4th_line: 'Dó 4&ordf; Linha',
        key_f_3rd_line: 'Fá 3&ordf; Linha',
        key_f_4th_line: 'Fá 4&ordf; Linha',           
        ssl: 'Linhas Suplementares Superiores',
        lsl: 'Linhas Suplementares Inferiores',
        without_lines: 'Sem Linhas',
        up_to_line_1: 'Até Linha 1',
        up_to_line_2: 'Até Linha 2',
        up_to_line_3: 'Até Linha 3',
        up_to_line_4: 'Até Linha 4',
        up_to_line_5: 'Até Linha 5',
        buttons: 'Botões',
        notes_names: 'Nomes das Notas',
        key_letters: 'Letras das Cifras',
        velocity: 'Velocidade',
        seconds: 'Segundos',
        start: 'Iníciar',
        anonymous: 'Anônimo',
        total: 'Total',
        hits: 'Acertos',
        errors: 'Erros',
        name_do: 'Dó',
        name_re: 'Ré',
        name_mi: 'Mi',
        name_fa: 'Fá',
        name_sol: 'Sol',
        name_la: 'Lá',
        name_si: 'Si',
        button_return: 'Voltar',
        button_start: 'Iníciar',
        button_stop: 'Parar',
        button_clean: 'Limpar',        
    },
    
    Start: function(){
        var language = Languages[this._language];
        
        $('#lang_name').html(language.name);
        $('#name').attr('placeholder', language.your_name);
        $('#lang_key').html(language.key);
        $('#key option').eq(0).html(language.key_g);
        $('#key option').eq(1).html(language.key_c_1st_line);
        $('#key option').eq(2).html(language.key_c_2nd_line);
        $('#key option').eq(3).html(language.key_c_3rd_line);
        $('#key option').eq(4).html(language.key_c_4th_line);
        $('#key option').eq(5).html(language.key_f_3rd_line);
        $('#key option').eq(6).html(language.key_f_4th_line);
        $('#lang_ssl').html(language.ssl);
        $('#lang_lsl').html(language.lsl);
        $('#ssl option').eq(0).html(language.without_lines);
        $('#ssl option').eq(1).html(language.up_to_line_1);
        $('#ssl option').eq(2).html(language.up_to_line_2);
        $('#ssl option').eq(3).html(language.up_to_line_3);
        $('#ssl option').eq(4).html(language.up_to_line_4);
        $('#ssl option').eq(5).html(language.up_to_line_5);
        $('#lsl option').eq(0).html(language.without_lines);
        $('#lsl option').eq(1).html(language.up_to_line_1);
        $('#lsl option').eq(2).html(language.up_to_line_2);
        $('#lsl option').eq(3).html(language.up_to_line_3);
        $('#lsl option').eq(4).html(language.up_to_line_4);
        $('#lsl option').eq(5).html(language.up_to_line_5);          
        $('#lang_buttons').html(language.buttons);
        $('#buttons option').eq(0).html(language.notes_names);
        $('#buttons option').eq(1).html(language.key_letters);
        $('#lang_velocity').html(language.velocity);
        $('#lang_seconds').html(language.seconds);
        $('#lang_start').html(language.start);
        $('#name_anonymous').val(language.anonymous);
        $('#lang_total').html(language.total);
        $('#lang_hits').html(language.hits);
        $('#lang_errors').html(language.errors);
        $('#lang_name_do').html(language.name_do);
        $('#lang_name_re').html(language.name_re);
        $('#lang_name_mi').html(language.name_mi);
        $('#lang_name_fa').html(language.name_fa);
        $('#lang_name_sol').html(language.name_sol);
        $('#lang_name_la').html(language.name_la);
        $('#lang_name_si').html(language.name_si);
        $('#lang_button_return').html(language.button_return);
        $('#lang_button_start').html(language.button_start);
        $('#lang_button_stop').html(language.button_stop);
        $('#lang_button_clean').html(language.button_clean);
    }
};

Languages.Default('English');
Languages.Start();
