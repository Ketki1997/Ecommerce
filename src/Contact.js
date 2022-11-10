import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.797382243671!2d79.12187751424626!3d21.080753291378723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b9d104d9dc69%3A0x4f595f7e3bd1536a!2sNagpure%20Celebration%20Hall%20and%20Lawns!5e0!3m2!1sen!2sin!4v1665337137204!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
    <div className="container">
      <div className="contact-form">
        <form  action="https://formspree.io/f/mrgdlbkg" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off" />
          <input type="email" placeholder="email" name="email" required autoComplete="off" />
          <textarea placeholder="Enter your message" autoComplete="off" name="message" cols="30" rows="10" ></textarea>
       <input type="submit"/>
        </form>

      </div>
    </div>
    </Wrapper>
  );
};

export default Contact;
