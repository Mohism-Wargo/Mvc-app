import $ from 'jquery'
import './app4.css'

const $Circle = $('#app4 .circle')

$Circle.on('mouseenter',()=>{
    $Circle.addClass ('active')
}).on('mouseleave', ()=>{
    $Circle.removeClass('active')
})