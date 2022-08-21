
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CheckBoxProps, JobListing,PositionFunction } from '../containers/interface';

const Filter = (props: CheckBoxProps) => {
  const [position, setPosition] = useState([]);
  const [state, setState] = useState('');

  const [ischecked, setIsChecked] = useState(false);
  useEffect(() => {
    const getPositionFunction = async () => {
      try {
        const url = `https://test-api.mojob.io/public/job/position-functions/?page-size=100`;

        const response = await axios.get(url);
        setPosition(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getPositionFunction();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let checkedValue = e.target.value;
    let ischecked = e.target.checked;
    if (ischecked) {
      setState(checkedValue);
      setIsChecked(ischecked);
    }
  };
  let res:[];
  const result = position.filter((item:PositionFunction ) => item.name_en === state);
  if (ischecked) {
    // @ts-expect-error
    res = result[0].children.map((ele:PositionFunction) => {
      return ele.name_en;
    });
  }

  return (
    <div>
      <ul>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            FILTER BY POSITION
          </button>
          <ul className="dropdown-menu">
            {position.map((filter:PositionFunction) => (
              <li className="dropdown-item" key={filter.id}>
                <label htmlFor={filter.name_en}>
                  <input
                    type="checkbox"
                    name={filter.name_en}
                    value={filter.name_en}
                    // @ts-expect-error
                    onClick={handleChange}
                  />
                  {filter.name_en}
                  {ischecked && state === filter.name_en ? (
                    <div>
                      {res.map((item:string, index:number) => {
                        return (
                          <div key={index}>
                            <label htmlFor={item} className="ml-3">
                              <input
                                type="checkbox"
                                value={item}
                                onChange={props.handleFilterChange}
                              />
                              {item}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Filter;
