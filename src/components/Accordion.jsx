import React from 'react'

const Accordion = () => {
    return (
        <div className='bg-newspace text-white rounded-2xl w-full p-10'>
            <div className="bg-transparent collapse collapse-plus border border-white">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">What is space travel?"</div>
                <div className="collapse-content text-sm">Space travel is the act of traveling into or through space using spacecraft or space vehicles.</div>
            </div>
            <div className="bg-transparent collapse collapse-plus border border-white">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">How long does it take to reach Mars?</div>
                <div className="collapse-content text-sm">It takes about 6-9 months to travel from Earth to Mars depending on the alignment of the planets.</div>
            </div>
            <div className="bg-transparent collapse collapse-plus border border-white">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">Do I need special training for space travel?</div>
                <div className="collapse-content text-sm">No, you don't need special training, but there will be a short pre-launch training session on the basics of space travel.</div>
            </div>
            <div className="bg-transparent collapse collapse-plus border border-white">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">Are space tours safe?</div>
                <div className="collapse-content text-sm">Yes, space tours are safe as they adhere to strict protocols and are operated by well-trained crews and advanced spacecraft.</div>
            </div>            
        </div>
    )
}

export default Accordion
