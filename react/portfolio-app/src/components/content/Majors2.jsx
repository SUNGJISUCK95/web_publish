export function Majors() {
    const majors = [       
        {
            "icons": "html",
            "title": "病院・医院・薬局を検索",
            "subject": "症状, 専門的な治療・特色, 治療/対応可能な疾患 ...",
            "className": "fa-solid fa-clipboard-check major-icon"
        },    
        {
            "icons": "mobile",
            "title": "地域から探す",
            "subject": "北海道・東北, 関東, 北陸, 中部",
            "className": "fa-solid fa-map-location-dot major-icon"
        },
        {
            "icons": "server",
            "title": "診療科目から探す",
            "subject": "内科系, 整形外科系, 産科・婦人科系 ...",
            "className": "fa-solid fa-building major-icon"
        },        
    ];
    
    return(
        <ul className="majors">
            {
                majors && majors.map(major => 
                    <li className="major">
                        <Major icons={major.icons} title={major.title} subject={major.subject} className={major.className} />                
                    </li>
                )
            }           
        </ul>
    );
}

export function Major({icons, title, subject, className}) {
    return(
        <>
            {icons === "html" && <i className={className}></i>}
            {icons === "mobile" && <i className={className}></i>}
            {icons === "server" && <i className={className}></i>}
            <p>{title}</p>
            <p>{subject}</p>
        </>
    );
}