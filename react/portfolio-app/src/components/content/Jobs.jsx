export function Jobs() {
    const jobs = [
        { 
            "img": "images/jobs/google.png",
            "alt": "google-end",
            "name": "Google as Junior Software Engineer",
            "period": "2019 Oct - Untill now" 
        },
        {
            "img": "images/jobs/samsung.png",
            "alt": "samsung",
            "name": "Samsung as Junior Software Engineer",
            "period": "2010 Oct - 2019 Octn"
        }
    ];

    return(
        <ul className="jobs">
            {
                jobs && jobs.map(job => //jobs && : jobs에 값이 있을때만 실행
                    <li className="job">
                        <Job img={job.img} alt={job.alt} name={job.name} period={job.period}/>
                    </li>
                )
            }                
        </ul>
    );
}

export function Job({img, alt, name, period}){
    return(
        <>
            <img src={img} alt={alt}/>
            <div>
                <p className="job-name">{name}</p>
                <p className="job-period">{period}</p>
            </div>   
        </>
    );
}