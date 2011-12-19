 var rottenClam = {
   initialize: function(name) {
     $('body').html('<h1>' + name +'</h1> <div id=\'result\'></div>');
   },
        template: function(res, expected, message, ok) {
          var tem_body = '<div class="tresult"><h3>Result</h3>'; 

          if(typeof(expected) == 'object' && !ok) {
            tem_body += '<p class=\'fail\'> Test fail </p><ul><li class=\'expect\'><span>Expected ::</span> { ';
            for(i in expected) {
              tem_body += '\'' + i + '\' : ' + expected[i] + ',';
            }
            tem_body += ' }</li><li class=\'value\'><span>Result</span> :: { ';
            for(i in res) {
              tem_body += '\'' + i + '\' : ' + res[i] + ',';
            }
            tem_body += ' }</li></ul>';
          } else if(ok) {
            tem_body += '<p class=\'success\'> Test success. </p>';
          } else {
            tem_body += '<p class=\'fail\'> Test fail </p> ' + '<ul><li class=\'expect\'><span>Expected :: </span>' + expected + '</li>' + '<li class=\'value\'><span>Result :: </span>' + res + '</li>'+ '</ul>';
          }

          tem_body += '</div>';

          var tem_start = '<div class=\'test\'>' + '<h2> TEST :: '+ message +'</h2>'; 

          var tem_end = '</div>';

          var tem = tem_start + tem_body + tem_end;

          return tem;
        },
        equal:  function(result, expected, message) {
          var resType = typeof(result);
          var ok = false;
          if(resType == undefined) {
            $('#result').html($('#result').html() + this.template(result,expected, message, ok));
          } else if(resType=='string'||resType=='boolean'||resType=='number') {
            if(result == expected) {
              ok = true;
            }
            $('#result').html($('#result').html() + this.template(result,expected, message, ok));
          } else if(resType=='object') {
            ok = true;
            try {
              for(i in result) {
                if(result[i] != expected[i]) {
                  ok = false;
                }
              }
            } catch(e) {
              ok = false;
            }
            $('#result').html($('#result').html() + this.template(result,expected, message, ok));
          }
        },
        ok: function(res,message) {
          var ok = false;
          if(res) {
            ok = true;
          }
          this.equal(res, true, message, ok);
        },
        fail: function(res,message) {
          var ok = false;
          if(!res) {
            ok = true;
          }
          this.equal(res, false, message, ok);
        }
};
