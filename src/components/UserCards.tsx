import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { fetchUsers } from '../store/actions/userAction';
import Button from './UI/Button/Button';
import photoCover from "../assets/photo-cover.svg";
import "../scss/styles/UserSection.scss";
import Preloader from './UI/Preloader/Preloader';
import phoneTransform from '../helpers/phoneTransform';
import ReactTooltip from 'react-tooltip';

export default function UserCards() {
  const dispatch = useAppDispatch()
  const [count, setCount] = useState(6)
  const { usersDto, isLoading } = useAppSelector(state => state.user)
  const { userDto } = useAppSelector(state => state.auth)

  const getMoreUsers = () => {
    return setCount(prev => prev + 6)
  }

  useEffect(() => {
    if (userDto) {
      dispatch(fetchUsers(1, 6))
      setCount(6)
    }
  }, [dispatch, userDto])

  useEffect(() => {
    dispatch(fetchUsers(1, count))
  }, [dispatch, count])

  return (
    <>
      {
        usersDto?.users.map(user => {
          return (
            <div
              className='user-section__card'
              key={user.id}
            >
              <ReactTooltip />
              <img
                src={user.photo as string}
                alt={user.name}
                onError={({ currentTarget }) => currentTarget.src = photoCover} />

              <p
                data-tip={user.name}
                data-delay-show='750'
                data-place='bottom'
                data-arrow-color='transparent'
                data-class='tooltip'
              >
                {user.name}
              </p>

              <div className='user-section__detailed'>
                <p>{user.position}</p>
                <p
                  data-tip={user.email}
                  data-delay-show='750'
                  data-place='bottom'
                  data-arrow-color='transparent'
                  data-class='tooltip'
                >
                  {user.email}
                </p>
                <p
                  data-tip={user.phone}
                  data-delay-show='750'
                  data-place='bottom'
                  data-arrow-color='transparent'
                  data-class='tooltip'
                >
                  {phoneTransform(user.phone)}
                </p>
              </div>
            </div>)
        })
      }


      {/* Helpers for flex wrap */}
      <div className='user-section__card dummy'></div>
      <div className='user-section__card dummy'> </div>

      {/* Preloader and show more section */}

      <div className="user-section__btn">
        {
          count > usersDto.total_users || count >= 100
            ?
            <></>
            :
            !isLoading &&
            <Button
              isButton={true}
              onClick={getMoreUsers}
            >
              Show more
            </Button>
        }
        {
          isLoading &&
          <Preloader />
        }
      </div>

    </>
  )
}
