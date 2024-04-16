

import React from 'react'
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
export default function Dashboard() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center ">
                      <div className="flex-shrink-0">
                       
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center ">
                     
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Lana Byrd
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center ">
                      <div className="flex-shrink-0">
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Thomes Lean
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $2367
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </>
  )
}
