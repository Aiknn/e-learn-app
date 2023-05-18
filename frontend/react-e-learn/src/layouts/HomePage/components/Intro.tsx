export const Intro = () => {
    return (
        <div>
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-left'></div>
                    </div>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Жаңа дамыту дағдыларын үйрен!</h1>
                            <p className='lead'>
                                Бұл е-оқу платформасында сіз тегін курсты таңдап алуыңызға болады. 
                                Сондай-ақ, сіз жаңа дағдыларды үйрене аласыз.
                                Тек тіркеліп, кіріңіз.
                            </p>
                            <a className='btn main-color btn-lg text-white' href='##'>Кіру</a>
                        </div>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Оқу қиын емес, тек дұрыс әдіс керек!</h1>
                            <p className='lead'>
                                Оқу барысында біз тек дұрыс оқу техникаларын қолданамыз.
                                Сонымен қатар, барлық курстарда бағалау немесе рейтинг жүйесі бар, сондықтан 
                                курстарды алдын ала тексеруге болады.
                                Оқудағы мақсаттарыңызға жету үшін белсенді уақытты бөліп отырып, 
                                жалғастырып, жақсартуға болады.             
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>
                    </div>
                </div>
            </div>

            {/* Mobile Heros */}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>Жаңа дамыту дағдыларын үйрен!</h1>
                            <p className='lead'>
                                Бұл е-оқу платформасында сіз тегін курсты таңдап алуыңызға болады. 
                                Сондай-ақ, сіз жаңа дағдыларды үйрене аласыз.
                                Тек тіркеліп, кіріңіз.
                            </p>
                            <a className='btn main-color btn-lg text-white' href='##'>Кіру</a>
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='col-image-right'></div>
                        <div className='mt-2'>
                            <h1>Оқу қиын емес, тек дұрыс әдіс керек!</h1>
                            <p className='lead'>
                                Оқу барысында біз тек дұрыс оқу техникаларын қолданамыз.
                                Сонымен қатар, барлық курстарда бағалау немесе рейтинг жүйесі бар, сондықтан 
                                курстарды алдын ала тексеруге болады.
                                Оқудағы мақсаттарыңызға жету үшін белсенді уақытты бөліп отырып, 
                                жалғастырып, жақсартуға болады.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}