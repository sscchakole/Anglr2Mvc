using Angular2Mvc.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2Mvc.Controllers
{
    public class UserAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(db.Users.AsEnumerable());
        }

        public HttpResponseMessage Post([FromBody]User value)
        {
           // db.Users.Add(value);
            return ToJson(db.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]User value)
        {
            db.Entry(value).State = EntityState.Modified;
            return ToJson(db.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
           // db.Users.Remove(db.Users.FirstOrDefault(x => x.Id == id));
            return ToJson(db.SaveChanges());
        }
    }
}
