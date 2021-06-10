import React from 'react';

const Sixth_screen = () => {
    return (
        <div className="Sixth_screen">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h1>
                            Для солидных парней
                    </h1>

                        <p>
                            Пока апдейт PVP не вышел - вы можете поодержать
                            проект рублём и в дальнейшем получить выгодняе
                            предложения и уникальные предметы в игре.

                            <br/>
                            <br/>
                            Мы ценим наших спонсоров. Финансирование
                            проекта - возможность напрямую влиять на процесс разработки
                            и наши решения по развитию кластера серверов.

                        </p>
                        <a href="https://discord.gg/YFG8VJFs">
                        <button className="col-1">Перейти на форум</button>
                        </a>
                    </div>
                    <div className="col-lg-5">
                        <img src="/images/sixth/seriasMen.png"/>
                    </div>
                </div>
            </div>

        </div>

    )
};

export default Sixth_screen;