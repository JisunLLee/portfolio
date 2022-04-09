import lottie from "lottie-web";
import diceAni from "../animation/dice_ani1.json"
import bombAni from "../animation/bomb.json"
import sparkAni from "../animation/spark.json"

const LottiePlay = (props) => {
        const settings= {
            renderer: 'svg',
            loop: true,
            autoplay:true,
        };
        return lottie.loadAnimation({...settings, ...props});
}

export const DiceAni = (ref) => {
        console.log("[DiceAni]")
        return LottiePlay({ container: ref.current, animationData: diceAni, autoplay: false });
}

export const BombAni = (ref) => {
        return LottiePlay({ container: ref.current, animationData: bombAni, loop: false });
}

export const SparkAni = (ref) => {
       return LottiePlay({ container: ref.current, animationData: sparkAni, loop: false, autoplay: false});
  
}
