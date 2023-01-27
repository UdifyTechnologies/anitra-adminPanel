import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CAvatar,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'
import avatar8 from './../../assets/images/avatars/8.jpg'

const WidgetsDropdown = () => {
  return (
    <>
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="white"
            value={
              <>
                <span style={{ color: '#111A45', fontSize: '12px' }}> Total Farmers</span> <br />
                <span style={{ color: '#111A45', fontSize: '18px' }}>16134</span> <br />
                <span className="fs-6 fw-normal" style={{ color: '#111A45', fontSize: '12px' }}>
                  <span
                    style={{
                      background: '#CCF0E3 0% 0% no-repeat padding-box',
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '9px',
                      padding: 5,
                    }}
                  >
                    +20
                  </span>
                  <span
                    style={{
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '12px',
                      padding: 5,
                    }}
                  >
                    Since Last week
                  </span>
                </span>
              </>
            }
            title="Users"
            action={
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CAvatar src={avatar8} size="md" />
              </CDropdownToggle>
            }
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="white"
            value={
              <>
                <span style={{ color: '#111A45', fontSize: '12px' }}> Total Traders</span> <br />
                <span style={{ color: '#111A45', fontSize: '18px' }}>16134</span> <br />
                <span className="fs-6 fw-normal" style={{ color: '#111A45', fontSize: '12px' }}>
                  <span
                    style={{
                      background: '#CCF0E3 0% 0% no-repeat padding-box',
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '9px',
                      padding: 5,
                    }}
                  >
                    +20
                  </span>
                  <span
                    style={{
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '12px',
                      padding: 5,
                    }}
                  >
                    Since Last week
                  </span>
                </span>
              </>
            }
            title="Users"
            action={
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CAvatar src={avatar8} size="md" />
              </CDropdownToggle>
            }
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="white"
            value={
              <>
                <span style={{ color: '#111A45', fontSize: '12px' }}>
                  {' '}
                  Total Anitra Cluster Entrepreneur
                </span>{' '}
                <br />
                <span style={{ color: '#111A45', fontSize: '18px' }}>16134</span> <br />
                <span className="fs-6 fw-normal" style={{ color: '#111A45', fontSize: '12px' }}>
                  <span
                    style={{
                      background: '#CCF0E3 0% 0% no-repeat padding-box',
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '9px',
                      padding: 5,
                    }}
                  >
                    +20
                  </span>
                  <span
                    style={{
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '12px',
                      padding: 5,
                    }}
                  >
                    Since Last week
                  </span>
                </span>
              </>
            }
            title="Users"
            action={
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CAvatar src={avatar8} size="md" />
              </CDropdownToggle>
            }
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="white"
            value={
              <>
                <span style={{ color: '#111A45', fontSize: '12px' }}> Total Livestock</span> <br />
                <span style={{ color: '#111A45', fontSize: '18px' }}>16134</span> <br />
                <span className="fs-6 fw-normal" style={{ color: '#111A45', fontSize: '12px' }}>
                  <span
                    style={{
                      background: '#CCF0E3 0% 0% no-repeat padding-box',
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '9px',
                      padding: 5,
                    }}
                  >
                    +20
                  </span>
                  <span
                    style={{
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '12px',
                      padding: 5,
                    }}
                  >
                    Since Last week
                  </span>
                </span>
              </>
            }
            title="Users"
            action={
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CAvatar src={avatar8} size="md" />
              </CDropdownToggle>
            }
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="white"
            value={
              <>
                <span style={{ color: '#111A45', fontSize: '12px' }}> Total Orders</span> <br />
                <span style={{ color: '#111A45', fontSize: '14px' }}>Buy : 102525</span> <br />
                <span style={{ color: '#111A45', fontSize: '14px' }}>Sell : 102525</span> <br />
                <span className="fs-6 fw-normal" style={{ color: '#111A45', fontSize: '12px' }}>
                  <span
                    style={{
                      background: '#CCF0E3 0% 0% no-repeat padding-box',
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '9px',
                      padding: 5,
                    }}
                  >
                    +20
                  </span>
                  <span
                    style={{
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '12px',
                      padding: 5,
                    }}
                  >
                    Since Last week
                  </span>
                </span>
              </>
            }
            title="Users"
            action={
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CAvatar src={avatar8} size="md" />
              </CDropdownToggle>
            }
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="white"
            value={
              <>
                <span style={{ color: '#111A45', fontSize: '12px' }}> Anitra Animals</span> <br />
                <span style={{ color: '#111A45', fontSize: '18px' }}>16134</span> <br />
                <span className="fs-6 fw-normal" style={{ color: '#111A45', fontSize: '12px' }}>
                  <span
                    style={{
                      background: '#CCF0E3 0% 0% no-repeat padding-box',
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '9px',
                      padding: 5,
                    }}
                  >
                    +20
                  </span>
                  <span
                    style={{
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '12px',
                      padding: 5,
                    }}
                  >
                    Since Last week
                  </span>
                </span>
              </>
            }
            title="Users"
            action={
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CAvatar src={avatar8} size="md" />
              </CDropdownToggle>
            }
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="white"
            value={
              <>
                <span style={{ color: '#111A45', fontSize: '12px' }}>
                  {' '}
                  Health Services Requests
                </span>{' '}
                <br />
                <span style={{ color: '#111A45', fontSize: '18px' }}>16134</span> <br />
                <span className="fs-6 fw-normal" style={{ color: '#111A45', fontSize: '12px' }}>
                  <span
                    style={{
                      background: '#CCF0E3 0% 0% no-repeat padding-box',
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '9px',
                      padding: 5,
                    }}
                  >
                    +20
                  </span>
                  <span
                    style={{
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '12px',
                      padding: 5,
                    }}
                  >
                    Since Last week
                  </span>
                </span>
              </>
            }
            title="Users"
            action={
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CAvatar src={avatar8} size="md" />
              </CDropdownToggle>
            }
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="white"
            value={
              <>
                <span style={{ color: '#111A45', fontSize: '12px' }}> Logistics Requests</span>{' '}
                <br />
                <span style={{ color: '#111A45', fontSize: '18px' }}>16134</span> <br />
                <span className="fs-6 fw-normal" style={{ color: '#111A45', fontSize: '12px' }}>
                  <span
                    style={{
                      background: '#CCF0E3 0% 0% no-repeat padding-box',
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '9px',
                      padding: 5,
                    }}
                  >
                    +20
                  </span>
                  <span
                    style={{
                      borderRadius: '4px',
                      opacity: '1',
                      color: '#111A45',
                      fontSize: '12px',
                      padding: 5,
                    }}
                  >
                    Since Last week
                  </span>
                </span>
              </>
            }
            title="Users"
            action={
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CAvatar src={avatar8} size="md" />
              </CDropdownToggle>
            }
          />
        </CCol>
      </CRow>
    </>
  )
}

export default WidgetsDropdown
