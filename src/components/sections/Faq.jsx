import { Disclosure } from '@headlessui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const faqs = [
  {
    question: "My desired product color or product size is sold out, what to do ?",
    answer:
      "Hey there, welcome! All across Europe you can find representatives of Bascart where you’ll be able to shop our collection. Contact the agent/importer in your region to discuss the possibilities. Click on the link.",
  },
  {
    question: "I forgot my username/password !",
    answer:
      "Hey there, welcome! All across Europe you can find representatives of Bascart where you’ll be able to shop our collection. Contact the agent/importer in your region to discuss the possibilities. Click on the link.",
  },
  {
    question: "How do I know if a product is in stock ?",
    answer:
      "Hey there, welcome! All across Europe you can find representatives of Bascart where you’ll be able to shop our collection. Contact the agent/importer in your region to discuss the possibilities. Click on the link.",
  },
  {
    question: "I would like to restock my collection",
    answer:
      "Hey there, welcome! All across Europe you can find representatives of Bascart where you’ll be able to shop our collection. Contact the agent/importer in your region to discuss the possibilities. Click on the link.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Faq = () => {
  return (
   <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
            Any Question? We're here to Help
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-light text-gray-900 text-xl">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <MdKeyboardArrowDown
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500 font-light">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Faq