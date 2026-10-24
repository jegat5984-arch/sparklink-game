body {
    margin: 0;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    color: white;
    text-align: center;
    overflow-x: hidden;

    background:
        radial-gradient(circle at 20% 20%, rgba(0,255,255,.18), transparent 25%),
        radial-gradient(circle at 80% 70%, rgba(0,128,255,.18), transparent 25%),
        linear-gradient(180deg, #07112c, #020816);

    animation: backgroundPulse 6s ease-in-out infinite;
}

@keyframes backgroundPulse {
    0% { filter: brightness(1); }
    50% { filter: brightness(1.15); }
    100% { filter: brightness(1); }
}

h1 {
    margin-top: 20px;
    font-size: 64px;
    color: #ffffff;

    text-shadow:
        0 0 10px #00ffff,
        0 0 20px #00ffff,
        0 0 40px #00ffff,
        0 0 80px #00ffff;
}

.hud {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 25px 0;
    font-size: 18px;
    font-weight: bold;
    color: #00ffff;
}

#game-board {
    width: 420px;
    margin: 20px auto;

    display: grid;
    grid-template-columns: repeat(5, 80px);
    gap: 5px;
}

.cell {
    width: 80px;
    height: 80px;

    border-radius: 14px;

    background: rgba(25,25,25,.9);

    border: 2px solid rgba(0,255,255,.15);

    box-shadow:
        inset 0 0 10px rgba(255,255,255,.03),
        0 0 12px rgba(0,255,255,.08);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 38px;
    cursor: pointer;

    transition: all .2s ease;
}

.cell:hover {
    transform: scale(1.05);

    border-color: #00ffff;

    box-shadow:
        0 0 10px #00ffff,
        0 0 25px rgba(0,255,255,.5);
}

#status {
    margin-top: 25px;
    font-size: 22px;
    font-weight: bold;
}

#nextLevelBtn {
    margin-top: 20px;

    padding: 16px 35px;

    border: none;
    border-radius: 14px;

    font-size: 22px;
    font-weight: bold;

    cursor: pointer;

    color: black;

    background:
        linear-gradient(
        135deg,
        #00ffcc,
        #00d4ff
    );

    box-shadow:
        0 0 20px rgba(0,255,255,.5);

    transition: all .2s ease;
}

#nextLevelBtn:hover {
    transform: scale(1.08);

    box-shadow:
        0 0 30px #00ffff;
}

@media(max-width:650px){

    h1{
        font-size:48px;
    }

    #game-board{
        width:310px;
        grid-template-columns:repeat(5,60px);
    }

    .cell{
        width:60px;
        height:60px;
        font-size:30px;
    }

    .hud{
        gap:15px;
        font-size:15px;
    }
}