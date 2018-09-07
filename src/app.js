const storage = window.localStorage;

function toggleForm() {
    document.getElementById('form').classList.toggle('hidden');  
  }


const renderContacts = () => {
    const contacts = JSON.parse(storage.getItem('contacts'))
    
    let div = document.querySelector('.contact-list');
    div.innderHTML = ''
    if (contacts) {        
        const sect = document.createElement('section');
        sect.classList.add('flex');
        sect.classList.add('flex-col');
        sect.classList.add('justify-start');      
        contacts.forEach(contact => {
            let sectChild = document.createElement('div')            
            sectChild.innerHTML = `
                <div class="max-w-sm rounded shadow-lg bg-pink-lightest my-4 px-6 py-4">                    
                        <h2>${ contact.name }</h2>
                        <h3>${ contact.company }</h3>
                        <p>${ contact.notes }</p>
                        ${ contact.email } | ${ contact.phone } | 
                        <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
                </div>
            `            
            sect.appendChild(sectChild)
        })
        
        div.appendChild(sect)
    } else {
        div.innerHTML = `<p>You have no contacts in your address book</p>`
    }
}

document.addEventListener('DOMContentLoaded', () => {    
    renderContacts();
    document.getElementById('formButton').addEventListener('click', toggleForm);  
    const addContactForm = document.querySelector('.new-contact-form');    
    addContactForm.addEventListener('submit', event => {
        let clearMessage = document.querySelector('.contact-list');
        clearMessage.innerHTML = ""
        event.preventDefault()        
        const storage = window.localStorage;    
        const{
            name,
            email,
            phone,
            company,
            notes,
            twitter,
        } = addContactForm.elements

        const contact ={
            id: Date.now(),
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value,
        }
        console.log(`Saving the following contact: ${JSON.stringify(contact)}`);
        
        let contacts = JSON.parse(storage.getItem('contacts')) || []
        contacts.push(contact)
        storage.setItem('contacts', JSON.stringify(contacts))
        renderContacts()
        addContactForm.reset()
        document.getElementById('form').classList.add('hidden')
    })
})