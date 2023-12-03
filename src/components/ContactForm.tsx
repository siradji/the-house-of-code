"use client"
import { FormEventHandler, HTMLInputTypeAttribute, useState} from 'react'

interface ContactFormI  {
    fullName: string
    phoneNumber: string

    email: string

    budget: string,

    idea: string

    companyName: string
}

export function ContactForm () {
    const [formState, setFormState] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        budget: '',
        idea: '',
        companyName: '',
    })


    const handleFormChange = (name:  keyof ContactFormI, value: string ): void => {
            setFormState((prev) => ({...prev, [name]: value}))
    }


    const handleFormSubmit = (e:FormEventHandler<HTMLFormElement> | any): void => {
        e.preventDefault()

        console.log(e)
    }

    return (
        <form onSubmit={handleFormSubmit} className="w-full md:w-1/2">
            <FormControl
                value={formState.fullName}
                name="fullName"
                label="Full name"
                onChange={handleFormChange}
                placeholder="Musa Sani"
            />
            <FormControl
                value={formState.phoneNumber}
                name="phoneNumber"
                label="Phone Number"
                onChange={handleFormChange}
                placeholder="080 200 400000"
            />
            <FormControl
                value={formState.companyName}
                name="companyName"
                label="Company Name"
                onChange={handleFormChange}
                placeholder="HSCB Bank"
            />
            <FormControl
                value={formState.email}
                name="email"
                label="Email"
                onChange={handleFormChange}
                placeholder="mycompany@gmail.com"
            />
            <FormControl
                value={formState.budget}
                name="budget"
                label="What is your budget?"
                onChange={handleFormChange}
                type="number"
            />
            <FormControlTextArea
                value={formState.idea}
                name="idea"
                label="Tell us about your project/idea"
                onChange={handleFormChange}
            />
            <button className="bg-branding-orange-500 rounded-[6.666px] text-white shadow-2xl py-3 px-4" type="submit">
                Submit form
            </button>
        </form>
    )

}


interface FormControlI {
   onChange: (name: keyof ContactFormI, value: string) => void,
    name: keyof ContactFormI
    value: string
    label: string
    placeholder?: string

    type?: HTMLInputTypeAttribute
}

function FormControl (props: FormControlI) {
      return (
          <div className="flex w-full my-5">
              <label className="text-accent text-sm font-bold flex flex-col w-full">
                  {props.label}
                  <input
                      type={props.type}
                      placeholder={props.placeholder}
                      name={props.name}
                      value={props.value}
                      onChange={({target: {value, name}}) => props.onChange(name as any, value) }
                      className="border-branding-orange-500 mt-2 border-2 rounded-[6.666px] bg-transparent py-3 px-2 text-accent text-accent font-bold"
                  />
              </label>
          </div>
      )
}


function FormControlTextArea (props: FormControlI) {
    return (
        <div className="flex w-full my-5">
            <label className="text-accent text-sm font-bold flex flex-col w-full">
                {props.label}
                <textarea
                    placeholder={props.placeholder}
                    name={props.name}
                    value={props.value}
                    onChange={({target: {value, name}}) => props.onChange(name as any, value) }
                    className="border-branding-orange-500 mt-2 border-2 rounded-[6.666px] bg-transparent py-3 px-2 text-accent text-accent font-bold"
                />
            </label>
        </div>
    )
}
