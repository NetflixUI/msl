/**
 * Copyright (c) 2012-2014 Netflix, Inc.  All rights reserved.
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
package com.netflix.msl;

import com.netflix.msl.entityauth.EntityAuthenticationData;
import com.netflix.msl.tokens.MasterToken;
import com.netflix.msl.tokens.UserIdToken;
import com.netflix.msl.userauth.UserAuthenticationData;

/**
 * Thrown when an encoding exception occurs within the Message Security Layer.
 * 
 * @author Wesley Miaw <wmiaw@netflix.com>
 */
public class MslEncodingException extends MslException {
    private static final long serialVersionUID = -2295976834635986944L;

    /**
     * Construct a new MSL encoding exception with the specified error.
     * 
     * @param error the error.
     */
    public MslEncodingException(final MslError error) {
        super(error);
    }
    
    /**
     * Construct a new MSL encoding exception with the specified error and
     * details.
     * 
     * @param error the error.
     * @param details the details text.
     */
    public MslEncodingException(final MslError error, final String details) {
        super(error, details);
    }
    
    /**
     * Construct a new MSL encoding exception with the specified error,
     * details, and cause.
     * 
     * @param error the error.
     * @param details the details text.
     * @param cause the cause.
     */
    public MslEncodingException(final MslError error, final String details, final Throwable cause) {
        super(error, details, cause);
    }
    
    /**
     * Construct a new MSL encoding exception with the specified error and
     * cause.
     * 
     * @param error the error.
     * @param cause the cause.
     */
    public MslEncodingException(final MslError error, final Throwable cause) {
        super(error, cause);
    }

    /* (non-Javadoc)
     * @see com.netflix.msl.MslException#setMasterToken(com.netflix.msl.tokens.MasterToken)
     */
    @Override
    public MslEncodingException setMasterToken(final MasterToken masterToken) {
        super.setMasterToken(masterToken);
        return this;
    }

    /* (non-Javadoc)
     * @see com.netflix.msl.MslException#setEntityAuthenticationData(com.netflix.msl.entityauth.EntityAuthenticationData)
     */
    @Override
    public MslEncodingException setEntityAuthenticationData(final EntityAuthenticationData entityAuthData) {
        super.setEntityAuthenticationData(entityAuthData);
        return this;
    }

    /* (non-Javadoc)
     * @see com.netflix.msl.MslException#setUserIdToken(com.netflix.msl.tokens.UserIdToken)
     */
    @Override
    public MslEncodingException setUserIdToken(final UserIdToken userIdToken) {
        super.setUserIdToken(userIdToken);
        return this;
    }

    /* (non-Javadoc)
     * @see com.netflix.msl.MslException#setUserAuthenticationData(com.netflix.msl.userauth.UserAuthenticationData)
     */
    @Override
    public MslEncodingException setUserAuthenticationData(final UserAuthenticationData userAuthData) {
        super.setUserAuthenticationData(userAuthData);
        return this;
    }

    /* (non-Javadoc)
     * @see com.netflix.msl.MslException#setMessageId(long)
     */
    @Override
    public MslEncodingException setMessageId(final long messageId) {
        super.setMessageId(messageId);
        return this;
    }
}
