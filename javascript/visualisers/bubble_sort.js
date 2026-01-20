async function bubbleSort(){
    const bars=document.getElementsByClassName("bar");

    for(let i=0;i<bars.length;i++)
    {
        for(let j=0;j<bars.length-i-1;j++)
        {
            bars[j].style.background="red";
            bars[j+1].style.background="red";

            await sleep(speed);

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                bars[j].style.height = `${array[j]}px`;
                bars[j + 1].style.height = `${array[j + 1]}px`;
            }

        bars[j].style.background = "steelblue";
        bars[j + 1].style.background = "steelblue";
        }
        bars[array.length - i - 1].style.background = "green";
    }
}