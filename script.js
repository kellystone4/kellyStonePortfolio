// $(document).ready(function () {
//   $('.sidenav').sidenav();
//   $('.modal').modal();

// });

$.cloudinary.image("front_face.png", {secure: true, transformation: [
    {width: 150, height: 150, gravity: "face", crop: "thumb"},
    {radius: 20},
    {effect: "sepia"},
    {overlay: new cloudinary.Layer().publicId("cloudinary_icon_blue"), gravity: "south_east", x: 5, y: 5, width: 50, opacity: 60, effect: "brightness:200"},
    {angle: 10}
    ]})
    

// function upload(file, options, callback)
// cloudinary.v2.uploader.upload("/home/my_image.jpg", 
//     function(error, result) {console.log(result, error)});

    
// cloudinary.uploader.v2.upload("sample.jpg",
// { responsive_breakpoints: { create_derived: true, bytes_step: 20000, min_width: 200, max_width: 1000, transformation: { crop: 'fill', aspect_ratio: '16:9', gravity: 'auto' } } }, function(error, result) { console.log(result); });