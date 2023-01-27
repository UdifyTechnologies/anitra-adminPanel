import React, { useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormSelect,
  CPagination,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import Select from '../forms/select/Select'

const FarmersList = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const [currentPage, setActivePage] = useState(1)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        id: '1',
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        id: '1',
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { id: '1', name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { id: '1', name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        id: '1',
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        id: '1',
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      <CRow>
        <CCol xs>
          <CCol sm={12}>
            <div className={'mt-2'}>
              <CPagination
                activePage={currentPage}
                pages={10}
                onActivePageChange={(i) => setActivePage(i)}
              ></CPagination>
            </div>
            <div className="small text-medium-emphasis float-end">
              <span
                style={{
                  marginTop: '15px',
                  background: '#B1040E 0% 0% no-repeat padding-box',
                  borderRadius: '4px',
                  opacity: '1',
                  color: 'white',
                  fontSize: '16px',
                  padding: 15,
                  margin: 10,
                }}
              >
                Export List
              </span>
              <span
                style={{
                  background: '#B1040E 0% 0% no-repeat padding-box',
                  borderRadius: '4px',
                  opacity: '1',
                  color: 'white',
                  fontSize: '16px',
                  padding: 15,
                }}
              >
                + Add Farmer
              </span>
            </div>
            {/* <div className="float-end">
              <span
                style={{
                  background: '#B1040E 0% 0% no-repeat padding-box',
                  borderRadius: '4px',
                  opacity: '1',
                  color: 'white',
                  fontSize: '15px',
                  // padding: 15,
                }}
              >
                Export List
              </span>
            </div>
            <div className="float-end">
              <span
                style={{
                  background: '#B1040E 0% 0% no-repeat padding-box',
                  borderRadius: '4px',
                  opacity: '1',
                  color: 'white',
                  fontSize: '15px',
                  // padding: 15,
                }}
              >
                Export List
              </span>
            </div> */}
            {/* <CButton color="primary" className="float-end">
              <CIcon icon={cilCloudDownload} />
            </CButton> */}
            <div
              className="input-group mb-6"
              style={{
                width: '380px',
              }}
            >
              <CCol sm={10}>
                <h5 id="traffic" className="card-title mb-0">
                  Farmers List
                </h5>
              </CCol>
              <CCol sm={10} style={{ marginTop: '10px' }}>
                <h6 id="traffic" className="card-title mb-0">
                  Partners {'>'} Farmers
                </h6>
              </CCol>
            </div>
          </CCol>
          <CCard className="mb-2" style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', marginTop: '40px', marginLeft: '20px' }}>
              <CCol sm={2}>
                <div
                  className="input-group mb-6"
                  style={{
                    width: '180px',
                  }}
                >
                  <input
                    color="#fff"
                    style={{
                      background: '#868AA0 0% 0% no-repeat padding-box',
                      border: '1px solid #fff',
                    }}
                    type="text"
                    placeholder="search"
                    className="form-control"
                    label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
              </CCol>
              <CCol sm={2}>
                {/* <CButton color="primary" className="float-end">
                  <CIcon icon={cilCloudDownload} />
                </CButton> */}
                <div
                  className="input-group mb-6"
                  style={{
                    width: '180px',
                  }}
                >
                  <CFormSelect aria-label="Default select example">
                    <option>Select State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </CFormSelect>
                </div>
              </CCol>
              <CCol sm={2}>
                {/* <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton> */}
                <div
                  className="input-group mb-6"
                  style={{
                    width: '180px',
                  }}
                >
                  <CFormSelect aria-label="Default select example">
                    <option>Select District</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </CFormSelect>
                </div>
              </CCol>
              <CCol sm={2}>
                {/* <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton> */}
                <div
                  className="input-group mb-6"
                  style={{
                    width: '180px',
                  }}
                >
                  <CFormSelect aria-label="Default select example">
                    <option>Select Mandal</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </CFormSelect>
                </div>
              </CCol>
              <CCol sm={2}>
                {/* <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton> */}
                <div
                  className="input-group mb-6"
                  style={{
                    width: '180px',
                  }}
                >
                  <CFormSelect aria-label="Default select example">
                    <option>Select Village</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </CFormSelect>
                </div>
              </CCol>
            </div>
            <CCardBody>
              {/* <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Recurring Clients</div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow> */}

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    {/* <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell> */}
                    <CTableHeaderCell>ID</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Name</CTableHeaderCell>
                    <CTableHeaderCell>Farmer Location</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">ACE Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Animals</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Total Requests</CTableHeaderCell>
                    <CTableHeaderCell>Total Orders</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      {/* <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell> */}
                      <CTableDataCell>
                        <div>{item.user.id}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        {/* <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div> */}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.id}</div>
                        {/* <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div> */}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.id}</div>
                        {/* <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div> */}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.id}</div>
                        {/* <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div> */}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.id}</div>
                        {/* <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div> */}
                      </CTableDataCell>
                      <CTableDataCell style={{ width: 200 }}>
                        {/* <span className="navbar-toggler-icon">Skip</span> */}
                        <div>{item.user.id}</div>
                      </CTableDataCell>
                      {/* <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell> */}
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <div className={'mt-2'}>
        <CPagination
          activePage={currentPage}
          pages={10}
          onActivePageChange={(i) => setActivePage(i)}
        ></CPagination>
      </div>
      {/* <WidgetsBrand withCharts /> */}
    </>
  )
}
export default FarmersList
