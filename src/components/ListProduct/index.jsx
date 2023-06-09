import React from "react"
import style from "./style.module.css"
import convertToRupiah from "../../utils/convertToRupiah"

const ListProduct = () => {
    const product = [
        {
            id: 1,
            bootcampType: "Intensive Bootcamp",
            title: "Programming Laravel",
            detailTitle: "Getting Started with Laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            price: 2060000,
            discountPrice: 560000
         },
         {
            id: 2,
            bootcampType: "Intensive Bootcamp",
            title: "Programming Laravel",
            detailTitle: "Getting Started with Laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            price: 2060000,
            discountPrice: 560000
         },
         {
            id: 3,
            bootcampType: "Intensive Bootcamp",
            title: "Programming Laravel",
            detailTitle: "Getting Started with Laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            price: 2060000,
            discountPrice: 560000
         },
         {
            id: 4,
            bootcampType: "Intensive Bootcamp",
            title: "Programming Laravel",
            detailTitle: "Getting Started with Laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            price: 2060000,
            discountPrice: 560000
         },
         {
            id: 5,
            bootcampType: "Intensive Bootcamp",
            title: "Programming Laravel",
            detailTitle: "Getting Started with Laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            price: 2060000,
            discountPrice: 560000
         },
         {
            id: 6,
            bootcampType: "Intensive Bootcamp",
            title: "Programming Laravel",
            detailTitle: "Getting Started with Laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            price: 2060000,
            discountPrice: 560000
         },
         {
            id: 7,
            bootcampType: "Intensive Bootcamp",
            title: "Programming Laravel",
            detailTitle: "Getting Started with Laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            price: 2060000,
            discountPrice: 560000
         },
         {
            id: 8,
            bootcampType: "Intensive Bootcamp",
            title: "Programming Laravel",
            detailTitle: "Getting Started with Laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            price: 2060000,
            discountPrice: 560000
         },
         {
            id: 9,
            bootcampType: "Intensive Bootcamp",
            title: "Programming Laravel",
            detailTitle: "Getting Started with Laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            price: 2060000,
            discountPrice: 560000
         },
         {
            id: 10,
            bootcampType: "Intensive Bootcamp",
            title: "Programming Laravel",
            detailTitle: "Getting Started with Laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            price: 2060000,
            discountPrice: 560000
         },
         {
            id: 11,
            bootcampType: "Intensive Bootcamp",
            title: "Programming Laravel",
            detailTitle: "Getting Started with Laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            price: 2060000,
            discountPrice: 560000
         },
         {
            id: 12,
            bootcampType: "Intensive Bootcamp",
            title: "Programming Laravel",
            detailTitle: "Getting Started with Laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            price: 2060000,
            discountPrice: 560000
         },
     ]

    return (
        <>
            <div className="background-color-content">
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 gap-5">
                    { product.map((element, index) => {
                        return (
                            <div key={element.id} className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className={style["wrapper"]}>
                                    <div className={style["div-left"]}>
                                        <img className={style["img-content"]} src={require('../../assets/images/img_content.png')} alt="img-content" />
                                    </div>
                                    <div className={style["div-right"]}>
                                        <p className={style["font-bootcamp-type"]}>{element.bootcampType}</p>
                                        <p className={style["font-title"]}>{element.title}</p>
                                        <p className={style["font-detail-title"]}>({element.detailTitle})</p>
                                    </div>   
                                </div>
                                <div className="px-6 py-2">
                                    <p className={style["font-title-desc"]}>{element.title}</p>
                                    <p className={style["font-detail-title-desc"]}>{element.detailTitle}</p>
                                    <div className={style["wrapper-text"]}>
                                        <div className={style["div-left-text"]}>
                                            <span className={style["font-title-text"]}>Batch</span>
                                        </div>
                                        <div className={style["div-right-text"]}>
                                            <span className={style["font-content-text"]}>{element.batch}</span>
                                        </div>
                                    </div>
                                    <div className={style["wrapper-text"]}>
                                        <div className={style["div-left-text"]}>
                                            <span className={style["font-title-text"]}>Mentor</span>
                                        </div>
                                        <div className={style["div-right-text"]}>
                                            <span className={style["font-content-text"]}>{element.mentor}</span>
                                        </div>
                                    </div>
                                    <p className={style["font-price"]}>{convertToRupiah(element.price+"", "Rp")}</p>
                                    <p className={style["font-discount-price"]}>{convertToRupiah(element.discountPrice+"", "Rp")}</p>
                                </div>
                            </div>
                        )
                    }) } 
                </div> 
                <div className="mt-10 p-8 text-right">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex items-center -space-x-px">
                            <li>
                                <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                            </li>
                            <li>
                                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                            </li>
                            <li>
                                <a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>    
    );
}

export default ListProduct