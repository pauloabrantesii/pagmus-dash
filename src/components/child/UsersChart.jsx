import React from "react";
import { Link } from "react-router-dom";

const UsersChart = () => {
  return (
    <div className='col-xxl-4 col-md-6'>
      <div className='card'>
        <div className='card-header border-bottom'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Solicitações de afiliação</h6>
            <Link
              to='#'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              Ver todos
              <iconify-icon
                icon='solar:alt-arrow-right-linear'
                className='icon'
              />
            </Link>
          </div>
        </div>
        <div className='card-body p-20'>
          <div className='d-flex flex-column gap-24'>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/user-grid/user-grid-img1.png'
                  alt=''
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Gota Angolana</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                  <Link
                    to='#'
                    className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
                  >
                    Thiago Martins
                  
                  </Link>
                  </span>
                </div>
              </div>
              <span className='text-warning-main fw-medium text-md'>
                Pendente
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/user-grid/user-grid-img2.png'
                  alt=''
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Gota Angolana</h6>
                  <Link
                    to='#'
                    className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
                  >
                    Manoel Rique
                  
                  </Link>
                </div>
              </div>
              <span className='text-success-main fw-medium text-md'>
                Aprovado
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/user-grid/user-grid-img3.png'
                  alt=''
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Gota Angolana</h6>
                  <Link
                    to='#'
                    className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
                  >
                    Ricardo Paulo
                  </Link>
                </div>
              </div>
              <span className='text-success-main fw-medium text-md'>
               Aprovado
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/user-grid/user-grid-img4.png'
                  alt=''
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Gota Angolana</h6>
                  <Link
                    to='#'
                    className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
                  >
                   Maicon Ramon
                  
                  </Link>
                </div>
              </div>
              <span className='text-success-main fw-medium text-md'>
                Aprovado
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/user-grid/user-grid-img5.png'
                  alt=''
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Gota Angolana</h6>
                  <Link
                    to='#'
                    className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
                  >
                    Manoela Ataíde
                  
                  </Link>
                </div>
              </div>
              <span className='text-success-main fw-medium text-md'>
                Aprovado
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersChart;
