!(function () {
    var svgCode = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0;visibility:hidden"><symbol id="icon-info-line" viewBox="0 0 64 64"><path d="M32 4C16.5 4 4 16.5 4 32s12.5 28 28 28 28-12.5 28-28S47.5 4 32 4zm0 52C18.7 56 8 45.3 8 32S18.7 8 32 8s24 10.7 24 24-10.7 24-24 24z"/><path d="M30.9 25.2c-1.8.4-3.5 1.3-4.8 2.6-1.5 1.4.1 2.8 1 1.7.6-.8 1.5-1.4 2.5-1.8.7-.1 1.1.1 1.2.6.1.9 0 1.7-.3 2.6-.3 1.2-.9 3.2-1.6 5.9-1.4 4.8-2.1 7.8-1.9 8.8.2 1.1.8 2 1.8 2.6 1.1.5 2.4.6 3.6.3 1.9-.4 3.6-1.4 5-2.8 1.6-1.6-.2-2.7-1.1-1.8-.6.8-1.5 1.4-2.5 1.6-.9.2-1.4-.2-1.6-1-.1-.9.1-1.8.4-2.6 2.5-8.5 3.6-13.3 3.3-14.5-.2-.9-.8-1.7-1.6-2.1-1-.4-2.3-.4-3.4-.1z"/><circle cx="35" cy="19" r="3"/></g></symbol><symbol id="icon-logout-fill" viewBox="0 0 1024 1024"><path fill="#63656e" d="M441.12 195.36v67.2H260.64a61.6 61.6 0 00-64 63.04v375.84a63.04 63.04 0 0049.28 61.44 90.08 90.08 0 0016 1.44h179.2V832a18.56 18.56 0 01-2.88 0H254.72A128 128 0 01128 704V324a125.12 125.12 0 0174.08-116A114.4 114.4 0 01256 195.2h185.6zm174.56 437.92h-268a18.4 18.4 0 01-20.48-14.08 22.4 22.4 0 010-5.6V413.76a17.76 17.76 0 0120.16-19.36h268.8V210.56a17.28 17.28 0 0110.72-17.12 17.44 17.44 0 0120.32 4.48c3.36 3.52 7.04 6.72 10.4 10.08l129.6 127.04 165.76 163.04a17.12 17.12 0 010 27.52Q833.92 642.24 714.88 759.04l-67.84 66.24a17.6 17.6 0 01-20.16 5.28 17.28 17.28 0 01-11.36-18.24V633.28z"/></symbol><symbol id="icon-info-fill--2" viewBox="0 0 1024 1024"><path fill="#63656e" d="M768 384H256v-64h512zm0 160H256v-64h512zm0 160H256v-64h512zm64-576H192a64 64 0 00-64 64v640a64 64 0 0064 64h640a64 64 0 0064-64V192a64 64 0 00-64-64z"/></symbol><symbol id="icon-light" viewBox="0 0 1024 1024"><path fill="#ffb848" d="M797.44 349.12a286.72 286.72 0 00-573.44 0c0 61.92 33.28 142.08 86.72 201.12A392.8 392.8 0 01392.96 712a38.4 38.4 0 0110.56-1.76l173.6-1.92-133.44-184.16s-.96-1.44-1.6-2.08l-3.04-4.32v-1.28a16 16 0 010-8.96l41.12-120.96h-60.8a16.96 16.96 0 01-15.04-23.2l52.96-145.12a16 16 0 0115.04-10.88h93.92a16.96 16.96 0 0116 20.8l179.52 240A369.76 369.76 0 01704 555.2a406.88 406.88 0 00-77.76 154.08l3.68.96a390.88 390.88 0 0181.44-160c52.8-59.36 86.08-146.72 86.08-201.12z"/><path fill="#e28c02" d="M625.44 709.28A406.88 406.88 0 01704 555.2a369.76 369.76 0 0058.4-87.04l-179.52-240a23.68 23.68 0 01-1.6 4.32l-59.36 118.24h80a16.8 16.8 0 0112.96 28.64l-143.2 144.96a18.24 18.24 0 01-26.4 0l133.44 184.16h38.4a40.16 40.16 0 018.32.8zM439.04 517.76l3.04 4.32a19.04 19.04 0 01-2.4-5.6z"/><path fill="#fff8e1" d="M470.08 524.32l144-144.96a16.8 16.8 0 00-12.96-28.64h-80l59.36-118.24a23.68 23.68 0 001.6-4.32 16.96 16.96 0 00-16-20.8h-93.76a16 16 0 00-15.04 10.88l-52.96 145.12a16.96 16.96 0 0015.04 23.2h61.76L440 507.52a16 16 0 000 8.96 19.04 19.04 0 002.4 5.6s.96 1.44 1.6 2.08a18.24 18.24 0 0026.08.16z"/><path fill="#455a64" d="M403.84 925.12l19.68 28.32a15.04 15.04 0 0012.8 6.56h148.8a15.04 15.04 0 0012.8-6.56l20.32-29.28H512l-105.44 1.12z"/><path fill="#eceff1" d="M368 832v58.72a36 36 0 0035.68 34.72h2.08L512 924.16l106.4-1.12a36.48 36.48 0 0037.12-35.68v-71.52 16zm286.56 56.64h-160a16 16 0 110-30.24h160zM615.52 708h-38.4l-173.6 1.92a38.4 38.4 0 00-10.56 1.76 35.84 35.84 0 00-26.4 34.08l1.44 71.68v-16h285.92v-58.72a35.52 35.52 0 00-24.16-32l-3.68-.96a40.16 40.16 0 00-10.56-1.76zm-78.72 67.2H368v-30.24h168.8a16 16 0 110 30.24z"/><path fill="#cfd8dc" d="M477.76 873.28a16 16 0 0016.8 15.04h160v-30.24h-160a16 16 0 00-16.8 15.2zM367.36 801.6v30.08h286.72V801.6H367.36zM536.8 744.96H368v30.24h168.8a16 16 0 100-30.24z"/></symbol><symbol id="icon-doc" viewBox="0 0 1024 1024"><path fill="none" d="M512 638.72H345.44A20 20 0 00326.56 660v42.72A20 20 0 00345.44 724H512a19.84 19.84 0 0018.72-21.28V660A19.84 19.84 0 00512 638.72zM678.56 469.28H345.44a20.16 20.16 0 00-18.88 21.44v42.56a20.16 20.16 0 0018.88 21.44h333.12a20.16 20.16 0 0018.88-21.44v-42.56a20.16 20.16 0 00-18.88-21.44zM678.56 301.28H345.44a20.16 20.16 0 00-18.88 21.44v42.56a20.16 20.16 0 0018.88 21.44h333.12a20.16 20.16 0 0018.88-21.44v-42.56a20.16 20.16 0 00-18.88-21.44z"/><path fill="#3a84ff" d="M864 154.72A40 40 0 00826.4 112H197.6a40 40 0 00-37.6 42.72v714.56A40 40 0 00197.6 912h415.04V714.56a54.4 54.4 0 0155.84-52.48h193.6L864 660zm-333.28 548A19.84 19.84 0 01512 724H345.44a20 20 0 01-18.88-21.28V660a20 20 0 0118.88-21.28H512A19.84 19.84 0 01530.72 660zm166.72-169.44a20.16 20.16 0 01-18.88 21.44H345.44a20.16 20.16 0 01-18.88-21.44v-42.56a20.16 20.16 0 0118.88-21.44h333.12a20.16 20.16 0 0118.88 21.44zm0-168a20.16 20.16 0 01-18.88 21.44H345.44a20.16 20.16 0 01-18.88-21.44v-42.56a20.16 20.16 0 0118.88-21.44h333.12a20.16 20.16 0 0118.88 21.44z"/><path fill="#1964e1" d="M612.64 714.56V912L864 662.08H668.48a54.4 54.4 0 00-55.84 52.48z"/></symbol><symbol id="icon-grag-fill" viewBox="0 0 1024 1024"><path fill-rule="evenodd" d="M696.96 64a112 112 0 11-111.04 112A112 112 0 01696.96 64zm-369.92 0A112 112 0 11216 176 112 112 0 01327.04 64zm369.92 336a112 112 0 11-111.04 112 112 112 0 01111.04-112zm-369.92 0A112 112 0 11216 512a112 112 0 01111.04-112zm369.92 336a112 112 0 11-111.04 112 112 112 0 01111.04-112zm-369.92 0A112 112 0 11216 848a112 112 0 01111.04-112z"/></symbol></svg>'
    if (document.body) {
        document.body.insertAdjacentHTML('afterbegin', svgCode)
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.insertAdjacentHTML('afterbegin', svgCode)
        })
    }
})()