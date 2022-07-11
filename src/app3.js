import $ from 'jquery'
import './app3.css'

const $Square = $('#app3 .square')

$Square.on('click',()=>{
    $Square.toggleClass ('active')
})