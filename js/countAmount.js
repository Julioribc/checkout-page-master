
export default function countAmounts($conter, maxNumber=0, classElements){
    classElements = classElements || {
        "btnDecrease": ".product-decrement",
        "btnIncrease": ".product-increase",
        "conter": ".product-total",
      };
    const $btnDecrease = $conter.querySelector(classElements["btnDecrease"]),
        $btncounter = $conter.querySelector(classElements["conter"]),
        $btnIncrease = $conter.querySelector(classElements["btnIncrease"])


        $btnDecrease.addEventListener("click", () => {
            if($btncounter.value <= 0){
                return false
            };
            $btncounter.value = parseInt($btncounter.value) - 1;
        });

        $btnIncrease.addEventListener("click", () => {
            if(maxNumber && $btncounter.value >= maxNumber){
                return false
            }
            $btncounter.value = parseInt($btncounter.value) + 1;
        });
};
