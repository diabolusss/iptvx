/*

   Copyright 2018   Jan Kammerath

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

#ifndef RECORD_H
#define RECORD_H

#include <glib.h>
#include "recording.h"

/*
   Cancel the recording that is currently active
   @param         recptr      ptr to the current recording
*/
void iptvx_record_cancel(recording* recptr);

/*
   Starts the recording process and finishes it after stoptime
   @param         rec      struct representing recording data
*/
void iptvx_record_start(recording* rec);

#endif