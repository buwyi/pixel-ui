/* global DEV, PROD */
export default function () {
  if (PROD) {
    /* eslint-disable no-useless-escape */
    const logo = `
____________________________________________________________________________________


            ███╗   ███╗███╗   ███╗████████╗     █████╗  ██╗███████╗
            ████╗ ████║████╗ ████║╚══██╔══╝    ██╔══██╗███║╚════██║
            ██╔████╔██║██╔████╔██║   ██║       ╚█████╔╝╚██║    ██╔╝
            ██║╚██╔╝██║██║╚██╔╝██║   ██║       ██╔══██╗ ██║   ██╔╝
            ██║ ╚═╝ ██║██║ ╚═╝ ██║   ██║       ╚█████╔╝ ██║   ██║
            ╚═╝     ╚═╝╚═╝     ╚═╝   ╚═╝        ╚════╝  ╚═╝   ╚═╝

____________________________________________________________________________________
                              author:mmt817🐱
`

    const rainbowGradient = `
      background: linear-gradient(135deg, orange 60%, cyan);
      background-clip: text;
      color: transparent;
      font-size: 16px; 
      line-height: 1;
      font-family: "Courier New", ui-monospace, monospace;
      font-weight: 600;
    `

    console.info(`%c${logo}`, rainbowGradient)
  } else if (DEV) {
    console.log('[PixelUI]:dev mode...')
  }
}
