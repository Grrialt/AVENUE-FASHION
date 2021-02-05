$(document).ready( () =>{
    $('#nav-tab-mens').on('mouseenter', () => {
        $('.hidden-tabs').show()
    })
      
    $('#nav-tab-mens').on('mouseleave', () => {
        $('.hidden-tabs').hide();
    })

})