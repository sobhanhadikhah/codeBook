import { FaqSideBar } from "../../../components"
import { questionContent } from "../../../utils/content"

export const Faq = () => {
    return (
        <div className="max-w-[1240px] mx-auto  py-5  " >
            <div>
                <h1 className="py-10 text-center text-4xl  " >
                    Question in minde?
                </h1>
            </div>
            <div>

                {questionContent.map(items => {
                    const { id, ansawre, question } = items
                    return <FaqSideBar key={id} question={question} ansawre={ansawre} />
                })}
            </div>

        </div>
    )
}
