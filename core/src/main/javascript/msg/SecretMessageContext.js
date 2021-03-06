/**
 * Copyright (c) 2014-2015 Netflix, Inc.  All rights reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * <p>A message context implementation that can be extended for use with
 * messages that have secret contents which must be protected from the view of
 * unauthorized parties. The contents will be encrypted and integrity protected
 * but still replayable.</p>
 * 
 * <p>Most messages should be considered secret messages. Examples would
 * private conversations between individuals or the transmission of personal
 * information.</p>
 * 
 * @author Wesley Miaw <wmiaw@netflix.com>
 */
var SecretMessageContext = MessageContext.extend({
    /** @inheritDoc */
    isEncrypted: function isEncrypted() {
        return true;
    },
    
    /** @inheritDoc */
    isIntegrityProtected: function isIntegrityProtected() {
        return true;
    },
    
    /** @inheritDoc */
    isNonReplayable: function isNonReplayable() {
        return false;
    }
});
