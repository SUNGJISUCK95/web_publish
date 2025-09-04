
for(let i=1; i<6; i++) {
    console.log(`i --> ${i}`);
    // console.log(`i --> ${j}`); //j는 아래 for문이 끝나면 closer가 경로를 닫아버려서 존재하지않아 출력 불가능
    
    for(let j=2; j<5; j++) {
        console.log(`j --> ${j}`);
        console.log(`i --> ${i}`);        
    }
}