 var rottenClam = {
   initialize: function(name) {
     $('body').html('<h1>' + name +'</h1> <div id=\'alert\'><ul><li class=\'success\'>Success: <span>0</span></li><li class=\'fail\'>Fail: <span>0</span></li></ul></div><div id=\'result\'></div>');
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
            this.test(result, expected, message, ok); 
          } else if(resType=='string'||resType=='boolean'||resType=='number') {
            if(result == expected) {
              ok = true;
            }
            this.test(result, expected, message, ok);
          } else if(resType=='object') {
            ok = true;
            try {
              for(i in result) {
                if(result[i] != expected[i]) {
                  ok = false;
                }
              
              }
              for(i in expected) {
                if(result[i] != expected[i]) {
                  ok = false;
                }
              }
            } catch(e) {
              ok = false;
            }
            this.test(result, expected, message, ok);
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
        },
        raise: function(type) {
          var o = $('#alert > ul > .' + type +' > span');
          o.html(parseInt(o.text()) + 1);
        },
        test: function(result, expected, message, ok) {
          $('#result').html($('#result').html() + this.template(result,expected, message, ok));

          if(ok) {
            this.raise('success');
          } else {
            this.raise('fail');
          }
        }, 
};
