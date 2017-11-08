(ns wesele-app.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [wesele-app.core-test]))

(doo-tests 'wesele-app.core-test)
