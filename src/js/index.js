require('../css/base.less')
require('../css/index.less')
window.onload = function () {
    let screenW = document.body.clientWidth || document.documentElement.clientWidth;
    let screenH = document.body.clientHeight || document.documentElement.clientHeight;
    let btn = document.querySelector('.go-hide');
    let inpOne = document.querySelector('#one');
    let inpTwo = document.querySelector('#two');
    let inp = document.querySelector('.inp');
    let like = document.querySelector('.like');
    let otherLike = document.querySelector('.other-like');
    let unlike = document.querySelector('.unlike');
    let mulW = Math.ceil(screenW / multiple(screenW))
    let mulH = Math.ceil(screenH / multiple(screenH))
    let maxW = screenW - unlike.offsetWidth
    let minW = unlike.offsetWidth
    let maxH = screenH - unlike.offsetHeight
    let minH = unlike.offsetHeight
    console.log(unlike.offsetWidth,unlike.offsetHeight )
    let people = {};
    inpOne.value = '';
    inpTwo.value = '';
    btn.onclick = function () {
        if (inpOne.value.replace(/\s*/g, '') == '') {
            return
        } else if (inpTwo.value.replace(/\s*/g, '') == '') {
            return
        } else {
            people = {
                one: inpOne.value,
                two: inpTwo.value
            }
            inp.style.display = 'none';
            like.style.display = 'block'
            unlike.style.display = 'block'
        }
    }
    // 计算倍数
    function multiple(num) {
        if (num < 1) {
            return num
        }
        num /= 10
        // mul *=10
        return multiple(num)
    }
    // 计算随机数
    function randomNum(mulW, min, max) {
        let a = Math.trunc(Math.random() * mulW)
        if (a >= 0 && a <= max) {
            return a
        }
        return randomNum(mulW, min, max)
    }

    like.onclick = function () {
        like.style.animation = ''
        like.style.zIndex = '2'
        if (screenW <= 450 ) {
            like.style.top = '24%'
            like.style.left = '9%'
            unlike.style.top = '24%'
            unlike.style.left = '9%'
        }else {
            
            like.style.top = '34%'
            like.style.left = '38%'
            unlike.style.top = '34%'
            unlike.style.left = '38%'
        }
       
        like.onmouseover = function () {
            return
        }
        setTimeout(() => {
            unlike.style.display = 'none'
            otherLike.style.display = 'block'
            like.className += ' active'
            otherLike.className += ' active'
            like.children[0].className += ' active'
            otherLike.children[0].className += ' active'
           
            like.children[0].innerHTML = people.one
            otherLike.children[0].innerHTML = people.two
            // otherLike.style.borderRadious = '50% 0 0 50%'
        }, 500);
        

    }
    like.onmouseover = function () {
        like.style.animation = 'fontsize infinite alternate 0.5s'
    }
    like.onmouseleave = function () {
        like.style.animation = ''
        
    }
    
    unlike.onmouseover = function () {
        let maxW = screenW - unlike.offsetWidth - 20
        let minW = unlike.offsetWidth - 20
        let maxH = screenH - unlike.offsetHeight - 20
        let minH = unlike.offsetHeight - 20
        let left = randomNum(mulW, minW, maxW)
        let top = randomNum(mulH, minH, maxH)
        unlike.style.top = top + 'px'
        unlike.style.left = left + 'px'
    }
    unlike.addEventListener('touchstart', function () {
        let maxW = screenW - unlike.offsetWidth - 20
        let minW = unlike.offsetWidth - 20
        let maxH = screenH - unlike.offsetHeight - 20
        let minH = unlike.offsetHeight - 20
        let left = randomNum(mulW, minW, maxW)
        let top = randomNum(mulH, minH, maxH)
        unlike.style.top = top + 'px'
        unlike.style.left = left + 'px'
    })

}