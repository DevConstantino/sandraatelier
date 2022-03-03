import imgTest from '../imgs/teste.svg';

const Card = () => {
  return (
    <>
      <div class='card d-flex flex-row m-2'>
        <img src={imgTest} class='card-img p-1' alt='...'></img>
        <div class='card-body'>
          <button
            className='btn-outline-success'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            <h5 class='card-title'>Card title</h5>
          </button>
          <p class='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Modal title
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              {' '}
              <div class='container-fluid'>
                <div class='row'>
                  <div class='col-md-4'>.col-md-4</div>
                  <div class='col-md-4 ms-auto'>.col-md-4 .ms-auto</div>
                </div>
                <div class='row'>
                  <div class='col-md-3 ms-auto'>.col-md-3 .ms-auto</div>
                  <div class='col-md-2 ms-auto'>.col-md-2 .ms-auto</div>
                </div>
                <div class='row'>
                  <div class='col-md-6 ms-auto'>.col-md-6 .ms-auto</div>
                </div>
                <div class='row'>
                  <div class='col-sm-9'>
                    Level 1: .col-sm-9
                    <div class='row'>
                      <div class='col-8 col-sm-6'>
                        Level 2: .col-8 .col-sm-6
                      </div>
                      <div class='col-4 col-sm-6'>
                        Level 2: .col-4 .col-sm-6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='button' class='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
