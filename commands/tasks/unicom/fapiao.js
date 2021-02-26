        console.log('正在专心的看广告%ss秒,等待%ss秒再继续', ss);                                                              
        await new Promise((resolve, reject) => setTimeout(resolve, ss * 1000));                                                
        let {                                                                                                                  
            num,                                                                                                               
            jar                                                                                                                
        } = await fapiao.query(request, options);                                                                              
                                                                                                                               
        if (!num) {                                                                                                            
            console.log("ὀ0 发票赚积分: 今日已完成");                                                                         
            return;                                                                                                            
        }                                                                                                                      
        do {                                                                                                                   
            let params = {                                                                                                     
                arguments1: "AC20201013153418", // acid                                                                        
                arguments2: "GGPD", // yhChannel                                                                               
                arguments3: "0f1bf4c79828485dbc612380288b9f10", // yhTaskId menuId                                             
                arguments4: new Date().getTime(), // time                                                                      
                remark: "电子发票看视频得积分",                                                                                
                                                                                                                               
            };                                                                                                                 
            params["sign"] = sign([                                                                                            
                params.arguments1,                                                                                             
                params.arguments2,                                                                                             
                params.arguments3,                                                                                             
                params.arguments4,                                                                                             
            ]);                                                                                                                
            await require("./taskcallback").doTask(request, {                                                                  
                ...options,                                                                                                    
                params,                                                                                                        
                jar,                                                                                                           
            });                                                                                                                
                                                                                                                               
            let s = Math.floor(Math.random() * 30);                                                                            
            console.log("☕ 等待%s秒再继续", s);                                                                                
            // eslint-disable-next-line no-unused-vars                                                                         
            await new Promise((resolve, reject) => setTimeout(resolve, s * 1000));                                             
        } while (--num);                                                                                                       
    },                                                                                                                         
};                                                                                                                             
                                                                                                                               
module.exports = fapiao; 
