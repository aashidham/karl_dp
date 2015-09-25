jQuery(document).ready(function(){
    var makeClass = function(ele, flag){
        var day = 0, hours = -1, mins = 0, tmp = 0;
        if(flag){
            jQuery(ele).each(function(k, e){
                mins = k % 4;
                if(mins == 0){
                    hours++
                }
                jQuery(e).find('div').each(function(i, v){
                    day = ++i;
                    //console.log("mins: " + mins );
                    //console.log("hours: " + hours );
                    //console.log("days: " + (i+1));
                    //console.log(v);
                    jQuery(v).addClass('d_' + day).addClass('h_' + hours).addClass('m_' + mins);
                });
            });
        }else{
            jQuery(ele).each(function(k, e){
                if(k > 6){
                    mins = (k-7) % 4;
                    if(mins == 0){
                        hours++
                    }
                    jQuery(e).find('div').each(function(i, v){
                        day = ++i;
                        //console.log("mins: " + mins );
                        //console.log("hours: " + hours );
                        //console.log("days: " + day);
                        //console.log(v);
                        jQuery(v).addClass('d_' + day).addClass('h_' + hours).addClass('m_' + mins);
                    });
                }
            });
        }

    }

    makeClass(jQuery('.GroupGrid > div'), true);
    makeClass(jQuery('#YouGrid > div:eq(2)').find('>div'), false);
})