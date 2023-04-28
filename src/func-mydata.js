import React from 'react'

export function MyAbout(){
    return (
            <div style={{textAlign: 'center',color: 'blue'}}> 
                <h3>ข้อมูลส่วนตัว</h3>
                <br/>
                </div>
            )
    }
export function MyImage(){
    return (
        <div style={{textAlign: 'center'}}>
        <img src="./images/1.jpg" width="10%"/>
        </div>
    )
}
export function MyData(){
    return (
    <div style={{textAlign: 'center'}}> 
        ชื่อ-สกุล: ตัญญุตา หนูบูรณ์ <br/>
        ชื่อเล่น: กาย<br/>
        ชั้น: DT26521N เลขที่ 08<br/>
        แผนก: บริหารธุรกิจและเทคโนโลยีสารสนเทศ<br/>
        สาขา: เทคโนโลยีธุรกิจดิจิทัล<br/>
        </div>
    )
}

